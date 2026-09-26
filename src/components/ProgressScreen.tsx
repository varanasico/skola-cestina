import { GROUPS } from '../types'
import type { ProgressStats, Records } from '../types'

interface Props {
  progress: ProgressStats
  records: Records
  onBack: () => void
}

export default function ProgressScreen({ progress, records, onBack }: Props) {
  return (
    <div>
      <div className="top-row">
        <button className="icon-btn" onClick={onBack} aria-label="Zpět">
          ←
        </button>
        <div />
      </div>

      <h1 className="title">Tvůj pokrok</h1>

      <div className="card">
        <div className="stat-row">
          <span>Odehraná kola</span>
          <span className="stat-value">{records.roundsPlayed}</span>
        </div>
        <div className="stat-row">
          <span>Nejlepší série bez chyby</span>
          <span className="stat-value">{records.bestStreak}</span>
        </div>
        <div className="stat-row">
          <span>Nejlepší úspěšnost</span>
          <span className="stat-value">{records.bestAccuracyPercent}%</span>
        </div>
      </div>

      <div className="section-label">Úspěšnost podle skupin</div>
      <div className="card">
        {GROUPS.map((g) => {
          const stats = progress[g]
          const percent = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
          return (
            <div className="bar-row" key={g}>
              <span className="bar-label">Po {g}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${percent}%` }} />
              </div>
              <span className="bar-percent">
                {stats.total > 0 ? `${percent}%` : '—'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
