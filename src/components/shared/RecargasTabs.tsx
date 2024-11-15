import { recargas } from '@site'; // Asegúrate de que los datos JSON estén correctamente importados
import React, { useState } from 'react';
import styles from './RecargasTabs.module.css';
import type { RecargasData } from './types';  // Asegúrate de que el tipo está importado correctamente

// Componente RecargasSection para manejar la visualización de los paquetes de recarga
const RecargasSection: React.FC<{ paquetes: any }> = ({ paquetes }) => {
  return (
    <div className={styles.grid}>
      {paquetes.map((paquete: any, index: number) => (
        <div key={index} className={styles.card}>
          <h3>{paquete?.name || "Nombre no disponible"}</h3>
          <p>{paquete?.description || "Detalles no disponibles"}</p>
          {paquete?.discount > 0 && (
            <p className={styles.discount}>Ahorras S/ {paquete.discount}</p>
          )}
          <h4>S/ {paquete.price}</h4>
          <button
            className={styles.button}
            onClick={() => window.open(paquete.button.link, "_blank")}
          >
            {paquete.button.text || "Comprar Paquete"}
          </button>
        </div>
      ))}
    </div>
  );
};

// Componente RecargasTabs
const RecargasTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Recargas' | 'API'>('Recargas');  // Estado para las pestañas Recargas y API

  // Aseguramos que recargasData tenga el tipo RecargasData
  const recargasData = recargas as unknown as RecargasData;  // Aseguramos que recargasData sea de tipo RecargasData

  // Obtenemos los paquetes para Recargas y los planes para API
  const recargasPaquetes = recargasData?.recargas?.paquetes || [];  
  const apiPlanes = recargasData?.api?.plans || [];  

  return (
    <div className={styles['recargas-tabs']}>
      <h2 className={styles['section-title']}>{activeTab === 'Recargas' ? "Recargas" : "API"}</h2>

      <div className={styles.tabs}>
        <button
          className={activeTab === 'Recargas' ? styles.active : ''}
          onClick={() => setActiveTab('Recargas')}
        >
          Recargas
        </button>
        <button
          className={activeTab === 'API' ? styles.active : ''}
          onClick={() => setActiveTab('API')}
        >
          API
        </button>
      </div>

      <div className={styles.content}>
        {/* Mostramos los paquetes de Recargas o los planes de API dependiendo de la pestaña seleccionada */}
        {activeTab === 'Recargas' && <RecargasSection paquetes={recargasPaquetes} />}
        {activeTab === 'API' && <RecargasSection paquetes={apiPlanes} />}
      </div>
    </div>
  );
};

export default RecargasTabs;
