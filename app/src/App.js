import React, { useState } from 'react';
import { Grid, TextField, Button, Paper, Box, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonsConfig from './ButtonsConfig';

function App() {
  const [ipAddress, setIpAddress] = useState('192.168.0.200');

  const eiow = (id) => {
    fetch(`http://${ipAddress}?code=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Host unreachable!');
      });
  };

  const handleIPChange = (event) => {
    setIpAddress(event.target.value);
  };

  const buttonStyle = {
    width: '100%',
    margin: 'auto'
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ p: 2, marginBottom: 2 }}>
        <Typography variant="h4" style={{ color: '#2E3B55', textAlign: 'center', marginBottom: '20px' }}>
          My remote control
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="input-ip"
            label="Ingrese IP"
            variant="outlined"
            fullWidth
            value={ipAddress}
            onChange={handleIPChange}
          />
        </div>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {ButtonsConfig.map((button, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <Button
                  variant="contained"
                  startIcon={button.icon}
                  onClick={() => eiow(button.code)}
                  style={buttonStyle}
                >
                  {button.text}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper >
      <ToastContainer />
    </Box >
  );
}

export default App;
