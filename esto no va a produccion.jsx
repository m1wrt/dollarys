import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [dollarData, setDollarData] = useState(null);

  useEffect(() => {
    axios.get('https://pydolarve.org/api/v1/dollar?page=bcv')
      .then(response => {
        // Acceder directamente al objeto "usd" del JSON
        setDollarData(response.data.monitors.usd);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  return (
    <>
      {dollarData ? (
        <div id="conversion-rates">
          <h2>{dollarData.title}</h2>
          <p>Precio: {dollarData.price}</p>
          <p>Cambio: {dollarData.change} ({dollarData.symbol})</p>
          <p>Última actualización: {dollarData.last_update}</p>
          <p>Porcentaje: {dollarData.percent}%</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}

export default App;


{

  {dollarData ? (
    <div id="conversion-rates">
      <h2>{dollarData.title}</h2>
      <p>Precio: {dollarData.price}</p>
      <p>Cambio: {dollarData.change} ({dollarData.symbol})</p>
      <p>Última actualización: {dollarData.last_update}</p>
      <p>Porcentaje: {dollarData.percent}%</p>
    </div>
  ) : (
    <p>Cargando datos...</p>
  )}
}