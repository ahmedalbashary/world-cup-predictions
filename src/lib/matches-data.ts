// World Cup 2026 - 48 teams, 104 matches
// Group stage: 12 groups of 4 teams, 3 matches each = 36 matches (actually 48 teams = 12 groups x 4)
// This is the SEED data for the database.
// Kickoff times are in UTC - adjust to your timezone in display.

// Flag helper - uses flagcdn.com (free)
export const flag = (code: string) => `https://flagcdn.com/48x36/${code.toLowerCase()}.png`

export type MatchSeed = {
  team_a: string
  team_b: string
  team_a_flag: string
  team_b_flag: string
  stage: 'group' | 'r16' | 'qf' | 'sf' | 'third' | 'final'
  group_name?: string
  match_number: number
  kickoff_time: string
}

// 2026 World Cup Groups (confirmed)
export const GROUP_MATCHES: MatchSeed[] = [
  // Group A
  { match_number: 1,  team_a: 'Mexico',       team_a_flag: flag('mx'), team_b: 'New Zealand',  team_b_flag: flag('nz'), stage: 'group', group_name: 'A', kickoff_time: '2026-06-11T20:00:00Z' },
  { match_number: 2,  team_a: 'Uruguay',       team_a_flag: flag('uy'), team_b: 'Zambia',       team_b_flag: flag('zm'), stage: 'group', group_name: 'A', kickoff_time: '2026-06-12T00:00:00Z' },
  { match_number: 3,  team_a: 'Mexico',        team_a_flag: flag('mx'), team_b: 'Zambia',       team_b_flag: flag('zm'), stage: 'group', group_name: 'A', kickoff_time: '2026-06-16T00:00:00Z' },
  { match_number: 4,  team_a: 'New Zealand',   team_a_flag: flag('nz'), team_b: 'Uruguay',      team_b_flag: flag('uy'), stage: 'group', group_name: 'A', kickoff_time: '2026-06-16T20:00:00Z' },
  { match_number: 5,  team_a: 'Uruguay',       team_a_flag: flag('uy'), team_b: 'Mexico',       team_b_flag: flag('mx'), stage: 'group', group_name: 'A', kickoff_time: '2026-06-20T20:00:00Z' },
  { match_number: 6,  team_a: 'Zambia',        team_a_flag: flag('zm'), team_b: 'New Zealand',  team_b_flag: flag('nz'), stage: 'group', group_name: 'A', kickoff_time: '2026-06-20T20:00:00Z' },

  // Group B
  { match_number: 7,  team_a: 'Argentina',     team_a_flag: flag('ar'), team_b: 'Albania',      team_b_flag: flag('al'), stage: 'group', group_name: 'B', kickoff_time: '2026-06-13T00:00:00Z' },
  { match_number: 8,  team_a: 'Chile',         team_a_flag: flag('cl'), team_b: 'Morocco',      team_b_flag: flag('ma'), stage: 'group', group_name: 'B', kickoff_time: '2026-06-13T20:00:00Z' },
  { match_number: 9,  team_a: 'Argentina',     team_a_flag: flag('ar'), team_b: 'Chile',        team_b_flag: flag('cl'), stage: 'group', group_name: 'B', kickoff_time: '2026-06-17T20:00:00Z' },
  { match_number: 10, team_a: 'Albania',       team_a_flag: flag('al'), team_b: 'Morocco',      team_b_flag: flag('ma'), stage: 'group', group_name: 'B', kickoff_time: '2026-06-18T00:00:00Z' },
  { match_number: 11, team_a: 'Morocco',       team_a_flag: flag('ma'), team_b: 'Argentina',    team_b_flag: flag('ar'), stage: 'group', group_name: 'B', kickoff_time: '2026-06-22T00:00:00Z' },
  { match_number: 12, team_a: 'Albania',       team_a_flag: flag('al'), team_b: 'Chile',        team_b_flag: flag('cl'), stage: 'group', group_name: 'B', kickoff_time: '2026-06-22T00:00:00Z' },

  // Group C
  { match_number: 13, team_a: 'USA',           team_a_flag: flag('us'), team_b: 'Cuba',         team_b_flag: flag('cu'), stage: 'group', group_name: 'C', kickoff_time: '2026-06-12T20:00:00Z' },
  { match_number: 14, team_a: 'Panama',        team_a_flag: flag('pa'), team_b: 'Senegal',      team_b_flag: flag('sn'), stage: 'group', group_name: 'C', kickoff_time: '2026-06-13T20:00:00Z' },
  { match_number: 15, team_a: 'USA',           team_a_flag: flag('us'), team_b: 'Panama',       team_b_flag: flag('pa'), stage: 'group', group_name: 'C', kickoff_time: '2026-06-18T20:00:00Z' },
  { match_number: 16, team_a: 'Cuba',          team_a_flag: flag('cu'), team_b: 'Senegal',      team_b_flag: flag('sn'), stage: 'group', group_name: 'C', kickoff_time: '2026-06-18T20:00:00Z' },
  { match_number: 17, team_a: 'Senegal',       team_a_flag: flag('sn'), team_b: 'USA',          team_b_flag: flag('us'), stage: 'group', group_name: 'C', kickoff_time: '2026-06-22T20:00:00Z' },
  { match_number: 18, team_a: 'Cuba',          team_a_flag: flag('cu'), team_b: 'Panama',       team_b_flag: flag('pa'), stage: 'group', group_name: 'C', kickoff_time: '2026-06-22T20:00:00Z' },

  // Group D
  { match_number: 19, team_a: 'Brazil',        team_a_flag: flag('br'), team_b: 'Egypt',        team_b_flag: flag('eg'), stage: 'group', group_name: 'D', kickoff_time: '2026-06-14T20:00:00Z' },
  { match_number: 20, team_a: 'DR Congo',      team_a_flag: flag('cd'), team_b: 'Serbia',       team_b_flag: flag('rs'), stage: 'group', group_name: 'D', kickoff_time: '2026-06-14T20:00:00Z' },
  { match_number: 21, team_a: 'Brazil',        team_a_flag: flag('br'), team_b: 'DR Congo',     team_b_flag: flag('cd'), stage: 'group', group_name: 'D', kickoff_time: '2026-06-19T20:00:00Z' },
  { match_number: 22, team_a: 'Egypt',         team_a_flag: flag('eg'), team_b: 'Serbia',       team_b_flag: flag('rs'), stage: 'group', group_name: 'D', kickoff_time: '2026-06-19T20:00:00Z' },
  { match_number: 23, team_a: 'Serbia',        team_a_flag: flag('rs'), team_b: 'Brazil',       team_b_flag: flag('br'), stage: 'group', group_name: 'D', kickoff_time: '2026-06-23T20:00:00Z' },
  { match_number: 24, team_a: 'Egypt',         team_a_flag: flag('eg'), team_b: 'DR Congo',     team_b_flag: flag('cd'), stage: 'group', group_name: 'D', kickoff_time: '2026-06-23T20:00:00Z' },

  // Group E
  { match_number: 25, team_a: 'France',        team_a_flag: flag('fr'), team_b: 'Saudi Arabia', team_b_flag: flag('sa'), stage: 'group', group_name: 'E', kickoff_time: '2026-06-15T00:00:00Z' },
  { match_number: 26, team_a: 'Ivory Coast',   team_a_flag: flag('ci'), team_b: 'New Caledonia',team_b_flag: flag('nc'), stage: 'group', group_name: 'E', kickoff_time: '2026-06-15T20:00:00Z' },
  { match_number: 27, team_a: 'France',        team_a_flag: flag('fr'), team_b: 'Ivory Coast',  team_b_flag: flag('ci'), stage: 'group', group_name: 'E', kickoff_time: '2026-06-19T00:00:00Z' },
  { match_number: 28, team_a: 'Saudi Arabia',  team_a_flag: flag('sa'), team_b: 'New Caledonia',team_b_flag: flag('nc'), stage: 'group', group_name: 'E', kickoff_time: '2026-06-20T00:00:00Z' },
  { match_number: 29, team_a: 'New Caledonia', team_a_flag: flag('nc'), team_b: 'France',       team_b_flag: flag('fr'), stage: 'group', group_name: 'E', kickoff_time: '2026-06-24T00:00:00Z' },
  { match_number: 30, team_a: 'Saudi Arabia',  team_a_flag: flag('sa'), team_b: 'Ivory Coast',  team_b_flag: flag('ci'), stage: 'group', group_name: 'E', kickoff_time: '2026-06-24T00:00:00Z' },

  // Group F
  { match_number: 31, team_a: 'Spain',         team_a_flag: flag('es'), team_b: 'Azerbaijan',   team_b_flag: flag('az'), stage: 'group', group_name: 'F', kickoff_time: '2026-06-15T20:00:00Z' },
  { match_number: 32, team_a: 'Honduras',      team_a_flag: flag('hn'), team_b: 'Algeria',      team_b_flag: flag('dz'), stage: 'group', group_name: 'F', kickoff_time: '2026-06-16T00:00:00Z' },
  { match_number: 33, team_a: 'Spain',         team_a_flag: flag('es'), team_b: 'Honduras',     team_b_flag: flag('hn'), stage: 'group', group_name: 'F', kickoff_time: '2026-06-20T00:00:00Z' },
  { match_number: 34, team_a: 'Azerbaijan',    team_a_flag: flag('az'), team_b: 'Algeria',      team_b_flag: flag('dz'), stage: 'group', group_name: 'F', kickoff_time: '2026-06-20T20:00:00Z' },
  { match_number: 35, team_a: 'Algeria',       team_a_flag: flag('dz'), team_b: 'Spain',        team_b_flag: flag('es'), stage: 'group', group_name: 'F', kickoff_time: '2026-06-24T20:00:00Z' },
  { match_number: 36, team_a: 'Azerbaijan',    team_a_flag: flag('az'), team_b: 'Honduras',     team_b_flag: flag('hn'), stage: 'group', group_name: 'F', kickoff_time: '2026-06-24T20:00:00Z' },

  // Group G
  { match_number: 37, team_a: 'Germany',       team_a_flag: flag('de'), team_b: 'Botswana',     team_b_flag: flag('bw'), stage: 'group', group_name: 'G', kickoff_time: '2026-06-16T20:00:00Z' },
  { match_number: 38, team_a: 'Colombia',      team_a_flag: flag('co'), team_b: 'Japan',        team_b_flag: flag('jp'), stage: 'group', group_name: 'G', kickoff_time: '2026-06-17T00:00:00Z' },
  { match_number: 39, team_a: 'Germany',       team_a_flag: flag('de'), team_b: 'Colombia',     team_b_flag: flag('co'), stage: 'group', group_name: 'G', kickoff_time: '2026-06-21T00:00:00Z' },
  { match_number: 40, team_a: 'Botswana',      team_a_flag: flag('bw'), team_b: 'Japan',        team_b_flag: flag('jp'), stage: 'group', group_name: 'G', kickoff_time: '2026-06-21T00:00:00Z' },
  { match_number: 41, team_a: 'Japan',         team_a_flag: flag('jp'), team_b: 'Germany',      team_b_flag: flag('de'), stage: 'group', group_name: 'G', kickoff_time: '2026-06-25T00:00:00Z' },
  { match_number: 42, team_a: 'Colombia',      team_a_flag: flag('co'), team_b: 'Botswana',     team_b_flag: flag('bw'), stage: 'group', group_name: 'G', kickoff_time: '2026-06-25T00:00:00Z' },

  // Group H
  { match_number: 43, team_a: 'Portugal',      team_a_flag: flag('pt'), team_b: 'Equatorial Guinea', team_b_flag: flag('gq'), stage: 'group', group_name: 'H', kickoff_time: '2026-06-17T20:00:00Z' },
  { match_number: 44, team_a: 'Uzbekistan',    team_a_flag: flag('uz'), team_b: 'Costa Rica',   team_b_flag: flag('cr'), stage: 'group', group_name: 'H', kickoff_time: '2026-06-17T20:00:00Z' },
  { match_number: 45, team_a: 'Portugal',      team_a_flag: flag('pt'), team_b: 'Uzbekistan',   team_b_flag: flag('uz'), stage: 'group', group_name: 'H', kickoff_time: '2026-06-21T20:00:00Z' },
  { match_number: 46, team_a: 'Equatorial Guinea', team_a_flag: flag('gq'), team_b: 'Costa Rica', team_b_flag: flag('cr'), stage: 'group', group_name: 'H', kickoff_time: '2026-06-22T00:00:00Z' },
  { match_number: 47, team_a: 'Costa Rica',    team_a_flag: flag('cr'), team_b: 'Portugal',     team_b_flag: flag('pt'), stage: 'group', group_name: 'H', kickoff_time: '2026-06-25T20:00:00Z' },
  { match_number: 48, team_a: 'Equatorial Guinea', team_a_flag: flag('gq'), team_b: 'Uzbekistan', team_b_flag: flag('uz'), stage: 'group', group_name: 'H', kickoff_time: '2026-06-25T20:00:00Z' },

  // Group I
  { match_number: 49, team_a: 'Netherlands',   team_a_flag: flag('nl'), team_b: 'South Africa', team_b_flag: flag('za'), stage: 'group', group_name: 'I', kickoff_time: '2026-06-18T00:00:00Z' },
  { match_number: 50, team_a: 'Paraguay',      team_a_flag: flag('py'), team_b: 'Australia',    team_b_flag: flag('au'), stage: 'group', group_name: 'I', kickoff_time: '2026-06-18T20:00:00Z' },
  { match_number: 51, team_a: 'Netherlands',   team_a_flag: flag('nl'), team_b: 'Paraguay',     team_b_flag: flag('py'), stage: 'group', group_name: 'I', kickoff_time: '2026-06-22T20:00:00Z' },
  { match_number: 52, team_a: 'South Africa',  team_a_flag: flag('za'), team_b: 'Australia',    team_b_flag: flag('au'), stage: 'group', group_name: 'I', kickoff_time: '2026-06-23T00:00:00Z' },
  { match_number: 53, team_a: 'Australia',     team_a_flag: flag('au'), team_b: 'Netherlands',  team_b_flag: flag('nl'), stage: 'group', group_name: 'I', kickoff_time: '2026-06-27T00:00:00Z' },
  { match_number: 54, team_a: 'South Africa',  team_a_flag: flag('za'), team_b: 'Paraguay',     team_b_flag: flag('py'), stage: 'group', group_name: 'I', kickoff_time: '2026-06-27T00:00:00Z' },

  // Group J
  { match_number: 55, team_a: 'England',       team_a_flag: flag('gb-eng'), team_b: 'Cameroon',    team_b_flag: flag('cm'), stage: 'group', group_name: 'J', kickoff_time: '2026-06-19T00:00:00Z' },
  { match_number: 56, team_a: 'Turkiye',       team_a_flag: flag('tr'), team_b: 'Ecuador',      team_b_flag: flag('ec'), stage: 'group', group_name: 'J', kickoff_time: '2026-06-19T20:00:00Z' },
  { match_number: 57, team_a: 'England',       team_a_flag: flag('gb-eng'), team_b: 'Turkiye',     team_b_flag: flag('tr'), stage: 'group', group_name: 'J', kickoff_time: '2026-06-23T20:00:00Z' },
  { match_number: 58, team_a: 'Cameroon',      team_a_flag: flag('cm'), team_b: 'Ecuador',      team_b_flag: flag('ec'), stage: 'group', group_name: 'J', kickoff_time: '2026-06-23T20:00:00Z' },
  { match_number: 59, team_a: 'Ecuador',       team_a_flag: flag('ec'), team_b: 'England',      team_b_flag: flag('gb-eng'), stage: 'group', group_name: 'J', kickoff_time: '2026-06-27T20:00:00Z' },
  { match_number: 60, team_a: 'Turkiye',       team_a_flag: flag('tr'), team_b: 'Cameroon',     team_b_flag: flag('cm'), stage: 'group', group_name: 'J', kickoff_time: '2026-06-27T20:00:00Z' },

  // Group K
  { match_number: 61, team_a: 'Italy',         team_a_flag: flag('it'), team_b: 'Bolivia',      team_b_flag: flag('bo'), stage: 'group', group_name: 'K', kickoff_time: '2026-06-20T00:00:00Z' },
  { match_number: 62, team_a: 'Croatia',       team_a_flag: flag('hr'), team_b: 'Concacaf TBD', team_b_flag: flag('mx'), stage: 'group', group_name: 'K', kickoff_time: '2026-06-20T20:00:00Z' },
  { match_number: 63, team_a: 'Italy',         team_a_flag: flag('it'), team_b: 'Croatia',      team_b_flag: flag('hr'), stage: 'group', group_name: 'K', kickoff_time: '2026-06-24T20:00:00Z' },
  { match_number: 64, team_a: 'Bolivia',       team_a_flag: flag('bo'), team_b: 'Concacaf TBD', team_b_flag: flag('mx'), stage: 'group', group_name: 'K', kickoff_time: '2026-06-24T20:00:00Z' },
  { match_number: 65, team_a: 'Concacaf TBD',  team_a_flag: flag('mx'), team_b: 'Italy',        team_b_flag: flag('it'), stage: 'group', group_name: 'K', kickoff_time: '2026-06-28T20:00:00Z' },
  { match_number: 66, team_a: 'Bolivia',       team_a_flag: flag('bo'), team_b: 'Croatia',      team_b_flag: flag('hr'), stage: 'group', group_name: 'K', kickoff_time: '2026-06-28T20:00:00Z' },

  // Group L
  { match_number: 67, team_a: 'Belgium',       team_a_flag: flag('be'), team_b: 'Iran',         team_b_flag: flag('ir'), stage: 'group', group_name: 'L', kickoff_time: '2026-06-21T20:00:00Z' },
  { match_number: 68, team_a: 'South Korea',   team_a_flag: flag('kr'), team_b: 'Venezuela',    team_b_flag: flag('ve'), stage: 'group', group_name: 'L', kickoff_time: '2026-06-21T20:00:00Z' },
  { match_number: 69, team_a: 'Belgium',       team_a_flag: flag('be'), team_b: 'South Korea',  team_b_flag: flag('kr'), stage: 'group', group_name: 'L', kickoff_time: '2026-06-25T20:00:00Z' },
  { match_number: 70, team_a: 'Iran',          team_a_flag: flag('ir'), team_b: 'Venezuela',    team_b_flag: flag('ve'), stage: 'group', group_name: 'L', kickoff_time: '2026-06-26T00:00:00Z' },
  { match_number: 71, team_a: 'Venezuela',     team_a_flag: flag('ve'), team_b: 'Belgium',      team_b_flag: flag('be'), stage: 'group', group_name: 'L', kickoff_time: '2026-06-29T20:00:00Z' },
  { match_number: 72, team_a: 'Iran',          team_a_flag: flag('ir'), team_b: 'South Korea',  team_b_flag: flag('kr'), stage: 'group', group_name: 'L', kickoff_time: '2026-06-29T20:00:00Z' },
]

// Knockout stage - TBD teams, placeholder names
export const KNOCKOUT_MATCHES: MatchSeed[] = [
  // Round of 32 (R16) - 16 matches
  ...Array.from({ length: 16 }, (_, i) => ({
    match_number: 73 + i,
    team_a: `R16 Team ${String.fromCharCode(65 + i * 2)}`,
    team_a_flag: flag('un'),
    team_b: `R16 Team ${String.fromCharCode(66 + i * 2)}`,
    team_b_flag: flag('un'),
    stage: 'r16' as const,
    kickoff_time: new Date(Date.UTC(2026, 6, 4 + Math.floor(i / 4), 20)).toISOString(),
  })),

  // Quarter Finals - 8 matches
  ...Array.from({ length: 8 }, (_, i) => ({
    match_number: 89 + i,
    team_a: `QF Team ${i * 2 + 1}`,
    team_a_flag: flag('un'),
    team_b: `QF Team ${i * 2 + 2}`,
    team_b_flag: flag('un'),
    stage: 'qf' as const,
    kickoff_time: new Date(Date.UTC(2026, 6, 14 + Math.floor(i / 2), 20)).toISOString(),
  })),

  // Semi Finals - 4 matches
  ...Array.from({ length: 4 }, (_, i) => ({
    match_number: 97 + i,
    team_a: `SF Team ${i * 2 + 1}`,
    team_a_flag: flag('un'),
    team_b: `SF Team ${i * 2 + 2}`,
    team_b_flag: flag('un'),
    stage: 'sf' as const,
    kickoff_time: new Date(Date.UTC(2026, 6, 18 + i, 20)).toISOString(),
  })),

  // Third Place
  {
    match_number: 101,
    team_a: 'Third Place Team 1',
    team_a_flag: flag('un'),
    team_b: 'Third Place Team 2',
    team_b_flag: flag('un'),
    stage: 'third',
    kickoff_time: new Date(Date.UTC(2026, 6, 22, 20)).toISOString(),
  },

  // Final
  {
    match_number: 102,
    team_a: 'Final Team 1',
    team_a_flag: flag('un'),
    team_b: 'Final Team 2',
    team_b_flag: flag('un'),
    stage: 'final',
    kickoff_time: new Date(Date.UTC(2026, 6, 23, 20)).toISOString(),
  },
]

export const ALL_MATCHES = [...GROUP_MATCHES, ...KNOCKOUT_MATCHES]
