import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1048576;
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const EXPECTED_SHA256 = '2729d6bd2d9270cf540fef9cd869c08bb26cd4517af28726220a0048d9ccca77';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const PNG_IEND = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);

function verifyPng(data: Buffer): void {
  if (data.length === 0 || data.length > MAX_BYTES) {
    throw new Error(`Invalid PNG size: ${data.length} bytes`);
  }
  if (!data.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error('Invalid PNG magic header');
  }
  if (data.subarray(12, 16).toString('ascii') !== 'IHDR') {
    throw new Error('Missing PNG IHDR chunk');
  }
  const width = data.readUInt32BE(16);
  const height = data.readUInt32BE(20);
  if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
    throw new Error(`Unexpected PNG dimensions: ${width}x${height}`);
  }
  if (!data.subarray(data.length - 12).equals(PNG_IEND)) {
    throw new Error('Missing or truncated PNG IEND trailer');
  }
  const actualSha = createHash('sha256').update(data).digest('hex');
  if (actualSha !== EXPECTED_SHA256) {
    throw new Error(`SHA-256 mismatch: got ${actualSha}, expected ${EXPECTED_SHA256}`);
  }
}

function run(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, 'entry.png');
  const pngBytes = readFileSync(sourcePath);
  verifyPng(pngBytes);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  const tmpPath = join(outDir, '.entry.png.tmp');
  const targetPath = join(outDir, 'entry.png');
  writeFileSync(tmpPath, pngBytes);
  renameSync(tmpPath, targetPath);
}

run();
