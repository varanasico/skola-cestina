import { GROUPS, type Group, type Mode } from '../types'
import { isDailyChallengeDoneToday } from '../lib/storage'

const MODE_LABEL: Record<Mode, string> = {
  trening: 'Trénink',
  cas: 'Na čas',
  'bez-chyby': 'Bez chyby',
}

interface Props {
  mode: Mode
  group: Group | 'MIX'
  onModeChange: (m: Mode) => void
  onGroupChange: (g: Group | 'MIX') => void
  onStart: () => void
  onStartDaily: () => void
  onOpenProgress: () => void
  onOpenSettings: () => void
  roundLength: number
}

export default function HomeScreen({
  mode,
  group,
  onModeChange,
  onGroupChange,
  onStart,
  onStartDaily,
  onOpenProgress,
  onOpenSettings,
  roundLength,
}: Props) {
  const dailyDone = isDailyChallengeDoneToday()

  return (
    <div>
      <div className="top-row">
        <div />
        <button className="icon-btn" onClick={onOpenSettings} aria-label="Nastavení rodiče">
          ⚙️
        </button>
      </div>

      <h1 className="title">Vyjmenovaná slova</h1>
      <p className="subtitle">Doplň i, nebo y. Hned uvidíš, jak sis vedl/a.</p>

      <div className="card">
        <div className="section-label">Režim</div>
        <div className="choice-grid">
          {(Object.keys(MODE_LABEL) as Mode[]).map((m) => (
            <button
              key={m}
              className={`choice-btn ${mode === m ? 'selected' : ''}`}
              onClick={() => onModeChange(m)}
            >
              {MODE_LABEL[m]}
            </button>
          ))}
        </div>

        <div className="section-label">Skupina</div>
        <div className="choice-grid groups">
          {GROUPS.map((g) => (
            <button
              key={g}
              className={`choice-btn small ${group === g ? 'selected' : ''}`}
              onClick={() => onGroupChange(g)}
            >
              {g}
            </button>
          ))}
          <button
            className={`choice-btn small ${group === 'MIX' ? 'selected' : ''}`}
            onClick={() => onGroupChange('MIX')}
          >
            Mix
          </button>
        </div>

        <button className="primary-btn" onClick={onStart}>
          Začít cvičit
        </button>
        <p className="hint">{roundLength} úloh · cca {Math.round((roundLength * 6) / 60) || 1} min</p>
      </div>

      <button
        className={`daily-banner ${dailyDone ? 'done' : ''}`}
        onClick={onStartDaily}
      >
        <span>{dailyDone ? '✅ Denní výzva splněna!' : '🔥 Denní výzva'}</span>
        <span>{dailyDone ? 'Zítra znovu' : 'Spustit'}</span>
      </button>

      <button className="link-btn" onClick={onOpenProgress} style={{ marginTop: 16 }}>
        Zobrazit můj pokrok
      </button>
    </div>
  )
}
