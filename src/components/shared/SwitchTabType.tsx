import React from 'react';
import styles from './RecargasTabs.module.css';  // Asegúrate de tener el estilo adecuado

interface SwitchPlanTypeProps {
  type: 'web' | 'api';
  setType: (type: 'web' | 'api') => void;
}

const SwitchPlanType: React.FC<SwitchPlanTypeProps> = ({ type, setType }) => {
  return (
    <div className={styles['switch-type']}>
      <button
        className={type === 'web' ? styles.active : ''}
        onClick={() => setType('web')}
      >
        Web
      </button>
      <button
        className={type === 'api' ? styles.active : ''}
        onClick={() => setType('api')}
      >
        API
      </button>
    </div>
  );
};

export default SwitchPlanType;
