import type { Group, RoundResult } from '../types'

interface Props {
  result: RoundResult
  onPlayAgain: () => void
  onChooseGroup: () => void
  onHome: () => void
}

function uniqueGroups(groups: Group[]): Group[] {
  return Array.from(new Set(groups))
}

export default function ResultScreen({ result, onPlayAgain, onChooseGroup, onHome }: Props) {
  const percent = result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0
  const weakGroups = uniqueGroups(result.mistakeGroups)

  let heading = 'Hotovo!'
  if (percent === 100) heading = 'Skvělá práce!'
  else if (percent >= 70) heading = 'Dobrá práce!'
  else if (percent < 40) heading = 'Ještě to zkus znovu.'

  return (
    <div>
      <h1 className="title">{heading}</h1>

      <div className="card">
        <div className="result-score">
          <div className="big">{percent}%</div>
          <div className="subtitle" style={{ margin: '4px 0 0' }}>
            {result.correct} z {result.total} správně
          </div>
        </div>

        <div className="stat-row">
          <span>Nejdelší série bez chyby</span>
          <span className="stat-value">{result.bestStreakInRound}</span>
        </div>
        <div className="stat-row">
          <span>Čas cvičení</span>
          <span className="stat-value">{Math.round(result.durationMs / 1000)} s</span>
        </div>

        {weakGroups.length > 0 && (
          <p className="hint" style={{ marginTop: 16 }}>
            Zkus si ještě procvičit skupinu: {weakGroups.join(', ')}
          </p>
        )}
      </div>

      <button className="primary-btn" onClick={onPlayAgain}>
        Hrát znovu
      </button>
      <button className="secondary-btn" onClick={onChooseGroup}>
        Jiná skupina
      </button>
      <button className="link-btn" onClick={onHome} style={{ marginTop: 8 }}>
        Domů
      </button>
    </div>
  )
}
