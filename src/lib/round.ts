import { tasksForGroup } from '../data/tasks'
import type { Task } from '../types'

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function buildRound(group: string, count: number): Task[] {
  const pool = tasksForGroup(group)
  const shuffled = shuffle(pool)
  if (shuffled.length >= count) return shuffled.slice(0, count)
  // Pokud skupina nemá dost úloh, doplníme opakováním (zamícháno znovu).
  const result: Task[] = []
  while (result.length < count) {
    result.push(...shuffle(pool))
  }
  return result.slice(0, count)
}

function seededRandom(seed: string): () => number {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0
  }
  return () => {
    h = (Math.imul(1103515245, h) + 12345) | 0
    return ((h >>> 0) % 1000) / 1000
  }
}

export function buildDailyChallenge(dateKey: string, count = 8): Task[] {
  const pool = tasksForGroup('MIX')
  const rand = seededRandom(dateKey)
  const arr = [...pool]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.slice(0, count)
}
