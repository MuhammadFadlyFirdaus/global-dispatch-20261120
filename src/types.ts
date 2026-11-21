export type RegionKey =
  | 'Europe'
  | 'Americas'
  | 'Asia'
  | 'Africa'
  | 'Middle East'
  | 'Oceania'
  | 'Global';

export type FieldKey =
  | 'Markets'
  | 'War'
  | 'Security'
  | 'Diplomacy'
  | 'Sport'
  | 'Economy'
  | 'Climate & Env'
  | 'Energy'
  | 'Labour & Protest'
  | 'Rights'
  | 'Courts'
  | 'Politics'
  | 'Tech & Cyber'
  | 'Weather'
  | 'Health'
  | 'Society'
  | 'Disasters';

export type EpistemicTag =
  | 'OFFICIAL'
  | 'CONFIRMED'
  | 'REPORTED'
  | 'ONGOING'
  | 'CLAIM';

export type StoryTier = 'lead' | 'feature' | 'brief';

export interface Story {
  readonly id: number;
  readonly tier: StoryTier;
  readonly region: RegionKey;
  readonly field: FieldKey;
  readonly dateline: string;
  readonly headline: string;
  readonly summary: string;
  readonly source: string;
  readonly epistemic: EpistemicTag;
  readonly lon?: number;
  readonly lat?: number;
  readonly leadLabel?: string;
}

export interface UtcStop {
  readonly time: string;
  readonly title: string;
  readonly detail: string;
}

export interface KpiItem {
  readonly value: string;
  readonly label: string;
  readonly source: string;
}

export interface DateCheckRow {
  readonly windowLabel: string;
  readonly items: string;
}

export interface RegionMeta {
  readonly key: RegionKey;
  readonly shortLabel: string;
  readonly color: string;
  readonly expectedCount: number;
}
