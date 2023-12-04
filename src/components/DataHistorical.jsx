import { useState, useEffect } from 'react';
import './DataHistorical.css';
import DataIndividual from './DataIndividual';

const DataRealTime = () => {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://proyecto-microcontroladores.onrender.com/last-50');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    // Llama a fetchData al montar el componente
    fetchData();
  }, []);

  // Renderiza tu componente con los valores
  return (
    <div className="historical">
        {datos.length > 0 ? datos.map((data, index) => <DataIndividual key={index} data={data} />) : <p>No hay datos disponibles</p>}
    </div>
  );
};

export default DataRealTime;
