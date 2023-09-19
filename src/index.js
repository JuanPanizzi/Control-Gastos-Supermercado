import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function registrarServiceWorker() {
  if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
          .then( reg => {
              console.log('El service worker se registró correctamente', reg)
          })
          .catch( err => {
              console.error('Error al registrar el service worker', err)
          })
  }   
  else {
      console.error('serviceWorker no está disponible en navigator')
  }
}
registrarServiceWorker()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
