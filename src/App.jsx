import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { AppBar, Box, Button, Card, CardContent, Container, Toolbar, Typography } from '@mui/material';

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Dollarys</Typography>
            <Button color="inherit" variant='outlined'>Support</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container>
        <Typography variant='h5' sx={{ mt: 2 }}>Banco Central de Venezuela:</Typography>

        {dollarData ? (
          <Card sx={{ minWidth: 80, mt: 2 }}>
            <CardContent>
              <Typography>Tasa Actual</Typography>
              <Typography variant='h3'>{dollarData.price} Bs.</Typography>
              <Typography>{dollarData.last_update}</Typography>
              <Typography variant='h6'>{dollarData.symbol}{dollarData.change} - {dollarData.percent}%</Typography>
            </CardContent>
          </Card>
        ) : (
          <center><p>Obteniendo tasas desde la api</p></center>
        )}
      </Container>
    </>
  );
}

export default App;
