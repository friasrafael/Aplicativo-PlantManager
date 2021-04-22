import React from 'react'; //Toda estrtutura de React deve ser iniciada com a importação do React
import AppLoading from 'expo-app-loading';

import { UserIdentification } from './src/pages/UserIdentification'; //Importou a pa´gina "Welcome" para o app
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold 
} from '@expo-google-fonts/jost'; //Importando a fonte Jost na raiz do APP. Foram importados alguns tipos específicos presentes na fonte Jost

export default function App() { //Aqui exportamos o App
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded) //Segura a tela de Splash até o carregamento da fonte ser feito
    return <AppLoading />
  

  return (
    <UserIdentification /> //Tag da página inicial
  )
}

