import type { Settings } from '../types'

interface Props {
  settings: Settings
  onChange: (settings: Settings) => void
  onReset: () => void
  onBack: () => void
}

const ROUND_LENGTHS = [5, 10, 15, 20]

export default function ParentSettingsScreen({ settings, onChange, onReset, onBack }: Props) {
  function toggle(key: 'timerEnabled' | 'hintsEnabled' | 'soundEnabled') {
    onChange({ ...settings, [key]: !settings[key] })
  }

  return (
    <div>
      <div className="top-row">
        <button className="icon-btn" onClick={onBack} aria-label="Zpět">
          ←
        </button>
        <div />
      </div>

      <h1 className="title">Nastavení rodiče</h1>

      <div className="card">
        <div className="section-label" style={{ marginTop: 0 }}>
          Počet úloh v kole
        </div>
        <div className="choice-grid">
          {ROUND_LENGTHS.map((n) => (
            <button
              key={n}
              className={`choice-btn ${settings.roundLength === n ? 'selected' : ''}`}
              onClick={() => onChange({ ...settings, roundLength: n })}
            >
              {n}
            </button>
          ))}
        </div>

        <div className="toggle-row">
          <span>Časovka v režimu „Na čas“</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.timerEnabled}
              onChange={() => toggle('timerEnabled')}
            />
            <span className="switch-track">
              <span className="switch-thumb" />
            </span>
          </label>
        </div>

        <div className="toggle-row">
          <span>Zobrazovat vysvětlení</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.hintsEnabled}
              onChange={() => toggle('hintsEnabled')}
            />
            <span className="switch-track">
              <span className="switch-thumb" />
            </span>
          </label>
        </div>

        <div className="toggle-row">
          <span>Zvuky</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={() => toggle('soundEnabled')}
            />
            <span className="switch-track">
              <span className="switch-thumb" />
            </span>
          </label>
        </div>
      </div>

      <button
        className="secondary-btn"
        onClick={() => {
          if (window.confirm('Opravdu chceš vymazat celý pokrok a rekordy?')) {
            onReset()
          }
        }}
      >
        Resetovat pokrok
      </button>
    </div>
  )
}
