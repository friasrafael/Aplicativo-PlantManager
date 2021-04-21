import React from 'react'; //Toda estrtutura de React deve ser iniciada com a importação do React
import { Welcome } from './src/pages/welcome'; //Importou a pa´gina "Welcome" para o app

export default function App() { //Aqui exportamos o App
  return (
    <Welcome/> //Tag da página inicial
  )
}

