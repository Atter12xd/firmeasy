import { pricing } from '@site'
export default function SwitchPlanPeriod({ period, setPeriod }: { period: 'monthly' | 'yearly', setPeriod: any }) {
  return (
    <div className="switch" id="switch-period">
      <div className="switch-wrapper">
        <span className={period === 'monthly' ? 'active' : ''} onClick={() => setPeriod('monthly')}>
          <p>Mensual</p>
        </span>
        <span className={period === 'yearly' ? 'active' : ''} onClick={() => setPeriod('yearly')}>
          <p>Anual・<b>{pricing.discount} Dscto</b></p>
        </span>
      </div>
    </div>
  )
}