import { useState, useEffect } from 'react';
import './DataRealTime.css';

const DataRealTime = () => {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://proyecto-microcontroladores.onrender.com/now');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();

    const intervalo = setInterval(() => {
      fetchData();
    }, 500);

    return () => clearInterval(intervalo);
  }, []);

  const temperatura = datos.temperatura || null;
  const nivel = datos.nivel || null;
  const hora = datos.hora ? datos.hora.slice(0, 8) : null;

  return (
    <div className="real-time">
        <section className="temp">
            <h3>Hora</h3>
            <p>{hora ? hora : "No hay datos disponibles"}</p>
        </section>
        <section className="temp">
            <h3>Temperatura</h3>
            <p>{temperatura ? temperatura + "ºC" : "No hay datos disponibles"}</p>
        </section>
        <section className="temp">
            <h3>Nivel</h3>
            <p>{nivel ? nivel + "%" : "No hay datos disponibles"}</p>
        </section>

    </div>
  );
};

export default DataRealTime;
