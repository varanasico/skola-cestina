export type Group = 'B' | 'L' | 'M' | 'P' | 'S' | 'V' | 'Z'

export const GROUPS: Group[] = ['B', 'L', 'M', 'P', 'S', 'V', 'Z']

export type TaskType = 'word' | 'phrase' | 'sentence'

export type Mode = 'trening' | 'cas' | 'bez-chyby'

export interface Task {
  id: string
  group: Group
  type: TaskType
  before: string
  answer: 'i' | 'y'
  after: string
  explanation: string
}

export interface GroupStats {
  correct: number
  total: number
}

export type ProgressStats = Record<Group, GroupStats>

export interface Records {
  bestStreak: number
  bestAccuracyPercent: number
  bestTimeMs: number | null
  roundsPlayed: number
}

export interface Settings {
  roundLength: number
  timerEnabled: boolean
  hintsEnabled: boolean
  soundEnabled: boolean
}

export interface RoundResult {
  mode: Mode
  group: Group | 'MIX'
  correct: number
  total: number
  bestStreakInRound: number
  durationMs: number
  mistakeGroups: Group[]
}
