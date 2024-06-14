export default function SwitchPlanType({ type, setType }: { type: 'web' | 'api', setType: (type: 'web' | 'api') => void }) {
  return (
    <div className="switch tiny" id="switch-type">
      <div className="switch-wrapper">
        <span className={type === 'web' ? 'active' : ''} onClick={() => setType('web')}>
          <p>WEB</p>
        </span>
        <span className={type === 'api' ? 'active' : ''} onClick={() => setType('api')}>
          <p>API</p>
        </span>
      </div>
    </div>
  )
}
