import React from 'react'; //Toda estrtutura de React deve ser iniciada com a importação do React
import AppLoading from 'expo-app-loading';

import Routes from './src/routes'; //Importou o index.tsx com as telas para o arquivo. Não é necessário colocar o caminho do index no import pq por padrão, quando colocamos o nome da pasta ele vai procurar um index dentro dela.

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold 
} from '@expo-google-fonts/jost'; //Importando a fonte Jost na raiz do APP. Foram importados alguns tipos específicos presentes na fonte Jost

export default function App() { 
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded) 
    return <AppLoading />
  

  return (
    <Routes /> 
  )
}
