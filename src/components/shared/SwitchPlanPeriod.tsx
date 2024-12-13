  import { pricing } from '@site'
  
  import { useState } from 'react';

export default function SwitchPlanPeriod() {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [volume, setVolume] = useState(1000);

  // Lógica para calcular los precios
  function calculatePrices(volume) {
    let firmEasyPrice = 0;
  
    // Calcular precio basado en los rangos
    if (volume <= 1000) {
      firmEasyPrice = volume * 0.09;
    } else if (volume <= 10000) {
      firmEasyPrice = 1000 * 0.09 + (volume - 1000) * 0.07;
    } else {
      firmEasyPrice = 1000 * 0.09 + 9000 * 0.07 + (volume - 10000) * 0.05;
    }
  
    // Precios para DocuSign y Dropbox (manteniendo lógica original)
    const docusignPriceLow = (volume * 0.2).toFixed(2);
    const docusignPriceHigh = (volume * 0.3).toFixed(2);
    const dropboxPriceLow = (volume * 0.5).toFixed(2);
    const dropboxPriceHigh = (volume * 0.6).toFixed(2);
  
    // Retornar los precios
    return {
      firmEasy: firmEasyPrice.toFixed(2), // Precio de FirmEasy con los nuevos rangos
      docusign: `${docusignPriceLow} - ${docusignPriceHigh}`,
      dropbox: `${dropboxPriceLow} - ${dropboxPriceHigh}`,
    };
  }
  
  // Ejemplo de uso
   
  const prices = calculatePrices(volume);
  console.log(prices);

  return (
    <div className="switch" id="switch-period">
      <div className="switch-wrapper">
        <span
          className={period === 'monthly' ? 'active' : ''}
          onClick={() => setPeriod('monthly')}
        >
          <p>Suscripción</p>
        </span>
        <span
          className={period === 'yearly' ? 'active' : ''}
          onClick={() => setPeriod('yearly')}
        >
          <p>Recargas</p>
        </span>
      </div>

      {/* Contenido de Recargas con Paquetes y Recargate a tu Medida */}
      {period === 'yearly' && (
        <div id="api-pricing">
          {/* Paquetes */}
          <h2>RECARGAS</h2>
          <div id="web-plans" className="plans">
            <div className="plan">
              <h3>Paquete 10</h3>
              <p>Válido para 10 Firmas</p>
              <h2>S/ 10.00</h2>
              <button className="cta-button">
                <a href="https://app.firmeasy.legal/planes?seccion=paquetes">Comprar Paquete</a>
              </button>
            </div>
            <div className="plan highlighted">
              <h3>Paquete 20</h3>
              <p>Válido para 20 Firmas</p>
              <h2>S/ 19.00</h2>
              <p className="savings">Ahorra S/ 1.00</p>
              <button className="cta-button">
                <a href="https://app.firmeasy.legal/registro">Comprar Paquete</a>
              </button>
            </div>
            <div className="plan">
              <h3>Paquete 50</h3>
              <p>Válido para 50 Firmas</p>
              <h2>S/ 45.00</h2>
              <p className="savings">Ahorra S/ 5.00</p>
              <button className="cta-button">
                <a href="https://app.firmeasy.legal/registro">Comprar Paquete</a>
              </button>
            </div>
            <div className="plan highlighted">
              <h3>Paquete 100</h3>
              <p>Válido para 100 Firmas</p>
              <p><strong><i>Incluye un certificado gratis</i></strong></p>
              <h2>S/ 85.00</h2>
              <p className="savings">Ahorra S/ 15.00</p>
              <button className="cta-button">
                <a href="https://app.firmeasy.legal/registro">Comprar Paquete</a>
              </button>
            </div>
          </div>

          {/* Recargate a tu Medida */}
          <h2>RECARGATE A TU MEDIDA</h2>
          <p className="subtitle">
            Precios ajustados al volumen de firmas electrónicas y digitales. Sin costos ocultos ni compromisos anuales
          </p>

          <p id="slider-value">{volume.toLocaleString()} firmas al mes</p>

          <div className="slider-container">
            <input
              type="range"
              id="volume-slider"
              min="50"
              max="100000"
              step="1"
              value={volume}
              onInput={(e) => setVolume(parseInt(e.target.value, 10))}
            />
            <div className="slider-labels">
              <span className="label-50">50</span>
              <span className="label-10000">10,000</span>
              <span className="label-50000">50,000</span>
              <span className="label-100000">100,000</span>
            </div>
          </div>

          <div className="pricing-table">
            <div className="pricing-card">
              <h3>FirmEasy API</h3>
              <p>{`$ ${prices.firmEasy}`}</p>
              <p>Mensual, contrato mensual</p>
              <button className="cta-button">
                <a href="https://app.firmeasy.legal/login">Seleccionar Paquete</a>
              </button>
            </div>

            <div className="pricing-card">
              <h3>DocuSign API</h3>
              <p>{`$ ${prices.docusign}`}</p>
              <p>Mensual, contrato anual</p>
            </div>

            <div className="pricing-card">
              <h3>Dropbox Sign API</h3>
              <p>{`$ ${prices.dropbox}`}</p>
              <p>Mensual, contrato anual</p>
            </div>
          </div>
        </div>
      )}

      {/* Contenido de Suscripción */}
      {period === 'monthly' && (
       <div id="web-plans" className="plans">
       <div className="plan">
         <h3>Plan Emprende - Firma Digital Básica</h3>
         <p><strong>70 Firmas / Mes</strong></p>
         <h2>S/ 45.00 / Mes</h2>
         <ul className="plan-benefits">
           <li>Evidencia Certificada para Firma Digital Legal</li>
           <li>2 usuarios</li>
           <li>Firma Digital a través de métodos seguros: Dibujada, OTP, Selfie, Documento de Identidad</li>
           <li>Verificación de Identidad Segura por WhatsApp, Correo o Celular</li>
           <li>Reportes en tiempo real</li>
           <li>Firma Electrónica Rápida a través de WhatsApp</li>
         </ul>
         <button className="cta-button">
           <a href="https://app.firmeasy.legal/registro">Solicita tu Plan de Firma Digital</a>
         </button>
       </div>
     
       <div className="plan highlighted">
         <h3>Plan Estándar - Firma Digital con Certificado</h3>
         <p><strong>250 Firmas / Mes</strong></p>
         <h2>S/ 99.00 / Mes</h2>
         <ul className="plan-benefits">
           <li>Incluye Plan Emprende</li>
           <li>7 usuarios</li>
           <li>Incluye 1 certificado digital (solo Perú)</li>
           <li>Personalización de marca</li>
           <li>Firma por formulario</li>
           <li>Video firma</li>
         </ul>
         <button className="cta-button">
           <a href="https://app.firmeasy.legal/registro">Solicita tu Plan de Firma Digital</a>
         </button>
       </div>
     
       <div className="plan">
         <h3>Plan Business - Firma Digital Masiva</h3>
         <p><strong>700 Firmas / Mes</strong></p>
         <h2>S/ 150.00 / Mes</h2>
         <ul className="plan-benefits">
           <li>Incluye Plan Estándar</li>
           <li>14 usuarios</li>
           <li>Incluye 1 certificado digital (solo Perú)</li>
           <li>Envío masivo</li>
         </ul>
         <button className="cta-button">
           <a href="https://app.firmeasy.legal/registro">Solicita tu Plan de Firma Digital</a>
         </button>
       </div>
     </div>
      )}
         <style jsx>{`
        /* Añadir tu estilo aquí */
          body, h1, h3, ul, li, p, button {
            margin: 0;
            padding: 0;
            font-family: 'IBM Plex Sans', Arial, sans-serif;
            box-sizing: border-box;
            font-size: var(--text-size-sm);
        }
            h2 {
                text-align: center;
                font-size: var(--title-size-lg);
                font-weight: 500;
                display: block;
                font-size: 1.7em;
                margin-block-start: 0.83em;
                margin-block-end: 0.83em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-family: 'IBM Plex Sans', Arial, sans-serif;
                font-weight: bold;
                unicode-bidi: isolate;
            }   
        /* Fondo general */
        body {
            background-color: #ffffff; /* Fondo más claro */
            color: #010115;
            padding: 20px;
        }

        /* Encabezado */
        header {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
        }

        .switch-container {
            display: flex;
            gap: 15px;
        }

        button {
            padding: 12px 25px;
            border: #020101;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            background: #00a28d;
            color: #ffffff;
            font-weight: bold;
        
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); /* Botones con sombra ligera */
        }

        button.active {

        
            color: #ffffff;
            /* Aumenta ligeramente al estar activo */
            /* Sombra más pronunciada */
        }

        button:hover {
            background: var(--bg-gradient); /* Mantener gradiente en hover */
            opacity: 0.9;
            box-shadow: 0 4px 10px rgba(60, 123, 232, 0.2); /* Hover con sombra */
        }

        /* Contenedor de los planes */
        .plans {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        #web-plans, #api-pricing {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            margin-top: 20px;
        }

        #web-plans h1, #api-pricing h1 {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
        }


        /* Cada plan */
        .plan {
           display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 15px;
  width: 230px;
  background-color: #fffff;
        }
  .plan-benefits {
  list-style-type: none;
  padding: 0;
  font-size: 14px;
  margin-top: 15px;
}

.plan-benefits li {
  margin: 10px 0;
  font-weight: 500;
  color: #555;
}

.plan-benefits li i {
  margin-right: 10px;
  color: #4caf50;
}
  .plan h2 {
  font-size: 22px;
  color: #333;
  margin: 10px 0;
  font-weight: bold;
}

        .plan:hover {
            transform: translateY(-5px); /* Elevación suave */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más profunda */
            border: 2px solid var(--accent-color); /* Cambia a color principal */
        }

        /* Plan destacado */


        /* Estilos de encabezados */
        .plan h3 {
            font-size: 22px;
            color: #333;
            margin-bottom: 15px;
            font-weight: bold;
        }

        .plan p {
            font-size: 16px;
            color: #606f7b;
            margin-bottom: 15px;
        }

        .plan strong {
            /* Color dinámico */
            font-weight: bold;
        }

        /* Precio */
        .plan h1 {
            font-size: 32px;
            color: var(--accent-color); /* Color dinámico */
            margin: 15px 0;
            font-weight: bold;
        }

        /* Ahorro (savings) */
        .plan .savings {
            color: #4b494b;
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        /* Botón de acción */
        .cta-button {
            background: #00a28d; /* Color del botón */
            color: #fff; /* Color del texto */
            border: none;
            padding: 20px 40px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-decoration: none; /* Elimina subrayados */
            margin-top: 10px;
        }

        .cta-button a {
            text-decoration: none; /* Elimina subrayado del enlace */
            color: inherit; /* Hereda el color del botón */
            display: inline-block; /* Hace que el enlace sea un bloque interno */
            width: 100%; /* Ocupa todo el ancho del botón */
            
        }

        .cta-button a:visited {
            color: inherit; /* Mantiene el color después de visitar */
        }                                                                    

        .cta-button:hover {
            background: #00876b; /* Color del botón en hover */
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2); /* Hover con sombra profunda */
            transform: scale(1.05); /* Animación de agrandamiento */
        }

        /* Clases adicionales */
        .hidden {
            display: none !important;
        }

        /* Variables de colores */
        :root {
            --container-max-width: 1200px;
            --container-max-width-md: 768px;
            --accent-color: #00a280;
            --tertiary-color: #4646a7;
            --secondary-color: #01a182;
            --bg-color: #f7f7f7;
            --bg-gradient: linear-gradient(90deg, var(--accent-color) 0%, var(--secondary-color) 30%, var(--tertiary-color) 100%);
            --bg-gradient-text: linear-gradient(90deg, var(--text-color) 0%, var(--accent-color) 100%);
            --font: "IBM Plex Sans", sans-serif;
            
        }

        @media (max-width: 576px) {
            .plan {
                width: 100%;
                margin-bottom: 20px;
            }
            .slider-container {
                margin: 1rem 0;
            }
        }
        #api-pricing {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
            padding: 1rem;
            font-size: 1.1rem;
        }

        #api-pricing2
        {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
            padding: 1rem;
            font-size: 1.1rem;
            background-color: #ffffff;
            
        }

        #api-pricing h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        #api-pricing .subtitle {
            color: #606f7b;
            margin-bottom: 2rem;
            font-size: 1rem;
        }

        .slider-container {
            margin: 2rem 0;
        }

        #volume-slider {
            appearance: none; /* Eliminar estilos predeterminados */
            width: 100%;
            margin: 1rem auto;
            display: block;
            background: #ddd; /* Color del fondo de la barra */
            border: none; /* Eliminar borde */
            height: 8px; /* Altura de la barra */
            border-radius: 5px; /* Esquinas redondeadas */
            outline: none; /* Quitar el contorno al seleccionar */
        }
        #volume-slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px; /* Tamaño del control */
            height: 20px;
            background: #808f96; /* Color del control */
            border-radius: 50%; /* Hacerlo circular */
            border: none; /* Eliminar borde */
            cursor: pointer;
            transition: background 0.3s ease;
        }
        #volume-slider::-webkit-slider-thumb:hover {
            background: var(--accent-color);
            transform: scale(1.2);
        }

        #volume-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #007bff;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        #slider-value {
            font-size: 1.65rem;
            font-weight: bold;
            color: #333;
        }

        .pricing-table {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .pricing-card {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 250px;
            margin-top: 48px;
        }

        .pricing-card h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }

        .pricing-card .badge {
            background: #ffcc00;
            color: #333;
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            display: inline-block;
        }

        .pricing-card .price {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 1rem 0;
            color: #333;
        }
        .pricing-details {
            margin-top: 2rem;
            text-align: center;
        }

        .pricing-details table {
            width: 100%;
            border-collapse: collapse;
            margin: 0 auto;
            max-width: 800px;
            font-size: 1rem;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .pricing-details th,
        .pricing-details td {
            padding: 1rem;
            text-align: center;
            border: 1px solid #ddd;
        }

        .pricing-details th {
            background: #0e035c ;
            color: #fff;
            font-weight: bold;
        }

        .pricing-details tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        .slider-container {
            position: relative;
            margin: 2rem 0;
        }

        .slider-container {
            position: relative; /* Hacer que las etiquetas sean posicionables */
            width: 100%;
        }

        .slider-labels {
            position: relative;
            width: 100%;
            margin-top: -50px; /* Separación con el deslizador */
            font-size: 0.9rem;
            color: #606f7b;
        }

        .slider-labels span {
            position: absolute; /* Posición absoluta dentro del contenedor */
            top: 0; /* Alinear en la parte superior */
            transform: translateX(-50%); /* Centrar horizontalmente */
        }

        /* Posiciones personalizadas */
        .label-50 {
            left: 1%; /* Extremo izquierdo */
            
        }

        .label-10000 {
            left: 11%; /* Aproximadamente 1/4 del ancho */

        }
        .label-50000 {
            left: 50%; /* Aproximadamente 3/4 del ancho */
        }

        .label-100000 {
            left: 99%; /* Extremo derecho */
        }
      `}</style>
      </div>
    );
  }