import { GROUPS, type Group, type ProgressStats, type Records, type Settings } from '../types'

const KEYS = {
  progress: 'vs.progress.v1',
  records: 'vs.records.v1',
  settings: 'vs.settings.v1',
  dailyChallenge: 'vs.daily.v1',
} as const

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return { ...fallback, ...JSON.parse(raw) } as T
  } catch {
    return fallback
  }
}

function writeJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage nedostupné (private mode) — pokrok se v této relaci neuloží.
  }
}

export function emptyProgress(): ProgressStats {
  const stats = {} as ProgressStats
  for (const g of GROUPS) stats[g] = { correct: 0, total: 0 }
  return stats
}

export function loadProgress(): ProgressStats {
  return readJson(KEYS.progress, emptyProgress())
}

export function saveProgress(stats: ProgressStats) {
  writeJson(KEYS.progress, stats)
}

export function recordAnswer(stats: ProgressStats, group: Group, isCorrect: boolean): ProgressStats {
  const next = { ...stats, [group]: { ...stats[group] } }
  next[group].total += 1
  if (isCorrect) next[group].correct += 1
  return next
}

const defaultRecords: Records = { bestStreak: 0, bestAccuracyPercent: 0, bestTimeMs: null, roundsPlayed: 0 }

export function loadRecords(): Records {
  return readJson(KEYS.records, defaultRecords)
}

export function saveRecords(records: Records) {
  writeJson(KEYS.records, records)
}

const defaultSettings: Settings = {
  roundLength: 10,
  timerEnabled: true,
  hintsEnabled: true,
  soundEnabled: false,
}

export function loadSettings(): Settings {
  return readJson(KEYS.settings, defaultSettings)
}

export function saveSettings(settings: Settings) {
  writeJson(KEYS.settings, settings)
}

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

export function isDailyChallengeDoneToday(): boolean {
  return readJson<{ date: string }>(KEYS.dailyChallenge, { date: '' }).date === todayKey()
}

export function markDailyChallengeDone() {
  writeJson(KEYS.dailyChallenge, { date: todayKey() })
}

export function resetProgress() {
  saveProgress(emptyProgress())
  saveRecords(defaultRecords)
}
