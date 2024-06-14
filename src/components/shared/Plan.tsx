import { pricing } from '@site'

function IconCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"></path>
    </svg>
  )
}

function IconSpark() {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_180_176)">
        <path
          d="M5.28125 13.5L3.95129 9.95496L0.40625 8.625L3.95129 7.29504L5.28125 3.75L6.61121 7.29504L10.1562 8.625L6.61121 9.95496L5.28125 13.5ZM2.23438 4.96875L1.63592 3.33283L0 2.73438L1.63592 2.13592L2.23438 0.5L2.83283 2.13592L4.46875 2.73438L2.83283 3.33283L2.23438 4.96875ZM10.1562 7L9.36635 4.94615L7.3125 4.15625L9.36635 3.36635L10.1562 1.3125L10.9462 3.36635L13 4.15625L10.9462 4.94615L10.1562 7Z"
          fill="url(#paint0_linear_180_176)"></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_180_176"
          x1="0"
          y1="7"
          x2="16.3317"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00A280"></stop>
          <stop offset="0.297071" stop-color="#01A182"></stop>
          <stop offset="0.825" stop-color="#4646A7"></stop>
          <stop offset="1" stop-color="#5C27B3"></stop>
        </linearGradient>
        <clipPath id="clip0_180_176">
          <rect
            width="13"
            height="13"
            fill="white"
            transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>

  )
}

function ChipRecommended() {
  return (
    <span className="chip_recommended">
      <i><IconSpark /></i>
      <p>Recomendado</p>
    </span>
  )
}

export default function Plan({ plan, period, type }: { plan: 'plan1' | 'plan2' | 'plan3', period: 'monthly' | 'yearly', type: 'web' | 'api' }) {
  return (
    <article className={pricing[type][plan].recommended ? 'recommended' : ''}>
      <div className="info">
        <h1>
          {pricing[type][plan].info.name}
          {pricing[type][plan].recommended && <>&nbsp;&nbsp;<ChipRecommended /></>}
        </h1>
        <p>{pricing[type][plan].info.documents[period]} documentos / {period === 'monthly' ? 'Mes' : 'Año'}</p>
        <h2>
          {pricing[type].coin}
          {pricing[type][plan].info.amount[period]}
          <span> / {period === 'monthly' ? 'Mes' : 'Año'}</span>
        </h2>
      </div>
      <ul>
        {pricing[type][plan].items.map((item: any) => (
          <li key={item}>
            <i><IconCheck /></i>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <button className={`${pricing[type][plan].recommended ? 'gradient' : 'outline'} transition-up`}>{pricing[type].buttonText}</button>
    </article>
  )
}
