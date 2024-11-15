import React from 'react';
import styles from './RecargasTabs.module.css';

const ApiTabs: React.FC<{ apiData: any }> = ({ apiData }) => {
  return (
    <div className={styles.grid}>
      {Object.values(apiData || {}).map((plan: any, index: number) => (
        <div key={index} className={styles.card}>
          <h3>{plan?.info?.name || "Nombre no disponible"}</h3>
          <p>{plan?.info?.details || "Detalles no disponibles"}</p>
          <ul>
            {plan?.items?.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            )) || <li>Información no disponible</li>}
          </ul>
          <button 
            className={styles.button} 
            onClick={() => plan?.button?.link && window.open(plan.button.link, "_blank")}
          >
            {plan?.button?.text || "Más información"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ApiTabs;
