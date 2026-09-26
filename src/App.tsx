import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import ExerciseScreen from './components/ExerciseScreen'
import ResultScreen from './components/ResultScreen'
import ProgressScreen from './components/ProgressScreen'
import ParentSettingsScreen from './components/ParentSettingsScreen'
import { buildDailyChallenge, buildRound } from './lib/round'
import {
  loadProgress,
  loadRecords,
  loadSettings,
  markDailyChallengeDone,
  recordAnswer,
  resetProgress,
  saveProgress,
  saveRecords,
  saveSettings,
  todayKey,
} from './lib/storage'
import type { Group, Mode, RoundResult, Task } from './types'

type Screen = 'home' | 'exercise' | 'result' | 'progress' | 'settings'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [mode, setMode] = useState<Mode>('trening')
  const [group, setGroup] = useState<Group | 'MIX'>('MIX')
  const [settings, setSettings] = useState(loadSettings)
  const [progress, setProgress] = useState(loadProgress)
  const [records, setRecords] = useState(loadRecords)

  const [currentTasks, setCurrentTasks] = useState<Task[]>([])
  const [isDaily, setIsDaily] = useState(false)
  const [lastResult, setLastResult] = useState<RoundResult | null>(null)

  function startRound(daily: boolean) {
    const tasks = daily
      ? buildDailyChallenge(todayKey(), 8)
      : buildRound(group, settings.roundLength)
    setCurrentTasks(tasks)
    setIsDaily(daily)
    setScreen('exercise')
  }

  function handleAnswer(answerGroup: Group, correct: boolean) {
    setProgress((prev) => {
      const next = recordAnswer(prev, answerGroup, correct)
      saveProgress(next)
      return next
    })
  }

  function handleFinish(result: RoundResult) {
    setRecords((prev) => {
      const percent = result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0
      const next = {
        bestStreak: Math.max(prev.bestStreak, result.bestStreakInRound),
        bestAccuracyPercent: Math.max(prev.bestAccuracyPercent, percent),
        bestTimeMs: prev.bestTimeMs === null ? result.durationMs : Math.min(prev.bestTimeMs, result.durationMs),
        roundsPlayed: prev.roundsPlayed + 1,
      }
      saveRecords(next)
      return next
    })
    if (isDaily) markDailyChallengeDone()
    setLastResult(result)
    setScreen('result')
  }

  function handleReset() {
    resetProgress()
    setProgress(loadProgress())
    setRecords(loadRecords())
  }

  return (
    <div className="app-shell">
      {screen === 'home' && (
        <HomeScreen
          mode={mode}
          group={group}
          onModeChange={setMode}
          onGroupChange={setGroup}
          onStart={() => startRound(false)}
          onStartDaily={() => startRound(true)}
          onOpenProgress={() => setScreen('progress')}
          onOpenSettings={() => setScreen('settings')}
          roundLength={settings.roundLength}
        />
      )}

      {screen === 'exercise' && (
        <ExerciseScreen
          tasks={currentTasks}
          mode={mode}
          group={isDaily ? 'MIX' : group}
          timerEnabled={settings.timerEnabled}
          hintsEnabled={settings.hintsEnabled}
          onAnswer={handleAnswer}
          onFinish={handleFinish}
          onExit={() => setScreen('home')}
        />
      )}

      {screen === 'result' && lastResult && (
        <ResultScreen
          result={lastResult}
          onPlayAgain={() => startRound(isDaily)}
          onChooseGroup={() => setScreen('home')}
          onHome={() => setScreen('home')}
        />
      )}

      {screen === 'progress' && (
        <ProgressScreen progress={progress} records={records} onBack={() => setScreen('home')} />
      )}

      {screen === 'settings' && (
        <ParentSettingsScreen
          settings={settings}
          onChange={(next) => {
            setSettings(next)
            saveSettings(next)
          }}
          onReset={handleReset}
          onBack={() => setScreen('home')}
        />
      )}
    </div>
  )
}
