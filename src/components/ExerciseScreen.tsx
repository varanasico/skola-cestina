import { useEffect, useRef, useState } from 'react'
import type { Group, Mode, RoundResult, Task } from '../types'

interface Props {
  tasks: Task[]
  mode: Mode
  group: Group | 'MIX'
  timerEnabled: boolean
  hintsEnabled: boolean
  onAnswer: (group: Group, correct: boolean) => void
  onFinish: (result: RoundResult) => void
  onExit: () => void
}

const ADVANCE_DELAY_MS = 1400
const SECONDS_PER_TASK = 6

export default function ExerciseScreen({
  tasks,
  mode,
  group,
  timerEnabled,
  hintsEnabled,
  onAnswer,
  onFinish,
  onExit,
}: Props) {
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreakInRound, setBestStreakInRound] = useState(0)
  const [mistakeGroups, setMistakeGroups] = useState<Group[]>([])
  const [answered, setAnswered] = useState<'i' | 'y' | null>(null)
  const [timeLeft, setTimeLeft] = useState(() => tasks.length * SECONDS_PER_TASK)

  const startedAt = useRef(Date.now())
  const advancedRef = useRef(false)
  const finishedRef = useRef(false)

  const task = tasks[index]
  const useTimer = mode === 'cas' && timerEnabled

  function finish(finalCorrect: number, finalMistakes: Group[], finalBestStreak: number) {
    if (finishedRef.current) return
    finishedRef.current = true
    onFinish({
      mode,
      group,
      correct: finalCorrect,
      total: finalCorrect + finalMistakes.length,
      bestStreakInRound: finalBestStreak,
      durationMs: Date.now() - startedAt.current,
      mistakeGroups: finalMistakes,
    })
  }

  useEffect(() => {
    if (!useTimer) return
    if (timeLeft <= 0) {
      finish(correctCount, mistakeGroups, bestStreakInRound)
      return
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useTimer, timeLeft])

  function goToNext(nextCorrect: number, nextMistakes: Group[], nextBestStreak: number) {
    if (index + 1 >= tasks.length) {
      finish(nextCorrect, nextMistakes, nextBestStreak)
      return
    }
    setIndex((i) => i + 1)
    setAnswered(null)
    advancedRef.current = false
  }

  function handleAnswer(choice: 'i' | 'y') {
    if (answered) return
    setAnswered(choice)
    const isCorrect = choice === task.answer
    onAnswer(task.group, isCorrect)

    const nextCorrect = correctCount + (isCorrect ? 1 : 0)
    const nextStreak = isCorrect ? streak + 1 : 0
    const nextBestStreak = Math.max(bestStreakInRound, nextStreak)
    const nextMistakes = isCorrect ? mistakeGroups : [...mistakeGroups, task.group]

    setCorrectCount(nextCorrect)
    setStreak(nextStreak)
    setBestStreakInRound(nextBestStreak)
    setMistakeGroups(nextMistakes)

    if (mode === 'bez-chyby' && !isCorrect) {
      setTimeout(() => {
        if (advancedRef.current) return
        advancedRef.current = true
        finish(nextCorrect, nextMistakes, nextBestStreak)
      }, ADVANCE_DELAY_MS)
      return
    }

    setTimeout(() => {
      if (advancedRef.current) return
      advancedRef.current = true
      goToNext(nextCorrect, nextMistakes, nextBestStreak)
    }, ADVANCE_DELAY_MS)
  }

  function handleManualNext() {
    if (!answered || advancedRef.current) return
    advancedRef.current = true
    if (mode === 'bez-chyby' && answered !== task.answer) {
      finish(correctCount, mistakeGroups, bestStreakInRound)
    } else {
      goToNext(correctCount, mistakeGroups, bestStreakInRound)
    }
  }

  const isCorrect = answered !== null ? answered === task.answer : null

  return (
    <div>
      <div className="top-row">
        <button className="icon-btn" onClick={onExit} aria-label="Zpět domů">
          ←
        </button>
        {useTimer && <span className="timer-pill">⏱ {timeLeft}s</span>}
        {mode === 'bez-chyby' && <span className="timer-pill">🔥 {streak}</span>}
      </div>

      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${((index + 1) / tasks.length) * 100}%` }}
        />
      </div>

      <div className="exercise-prompt">
        {task.before}
        <span
          className={`blank-slot ${answered ? `filled ${isCorrect ? 'correct' : 'wrong'}` : ''}`}
        >
          {answered ?? '_'}
        </span>
        {task.after}
      </div>

      <div className="iy-grid">
        {(['i', 'y'] as const).map((letter) => {
          const isChosen = answered === letter
          const showAsRight = answered !== null && letter === task.answer
          const showAsWrong = answered !== null && isChosen && letter !== task.answer
          return (
            <button
              key={letter}
              className={`iy-btn ${showAsRight ? 'right-answer' : ''} ${showAsWrong ? 'wrong-answer' : ''}`}
              onClick={() => handleAnswer(letter)}
              disabled={answered !== null}
            >
              {letter}
            </button>
          )
        })}
      </div>

      {answered !== null && (
        <div className={`feedback-banner ${isCorrect ? 'correct' : 'wrong'}`}>
          {isCorrect ? 'Správně!' : 'Tentokrát ne.'}
          {hintsEnabled && <div className="feedback-explanation">{task.explanation}</div>}
        </div>
      )}

      {answered !== null && (
        <button className="secondary-btn" onClick={handleManualNext}>
          Další
        </button>
      )}
    </div>
  )
}
