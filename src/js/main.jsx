import React from 'react';
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import ContadorCuerpo from './components/Contadorcuerpo';
import NumerosContador from './components/NumerosContador';

const reactRender = ReactDOM.createRoot(document.getElementById('root'))

let horas = 0;
let minutosSegundaCifra = 0;
let minutos = 0;
let decimales = 0;
let counter = 0;
setInterval(() => {

  reactRender.render(
    <React.StrictMode>
      <Home counter={counter} decimales={decimales} minutos={minutos} minutosSegundaCifra={minutosSegundaCifra} horas={horas} />
    </React.StrictMode>)

  counter++

  if (counter >= 10){
    counter = 0
    decimales++
  }

  if (decimales >= 6){
    decimales = 0
    minutos++
  }

  if (minutos >= 10){
    minutos = 0
    minutosSegundaCifra++
  }

  if (minutosSegundaCifra >= 6){
    minutosSegundaCifra = 0
    horas++
  }

}, 1000)

