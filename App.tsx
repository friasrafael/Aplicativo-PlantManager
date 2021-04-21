import React from 'react'; //Toda estrtutura de React deve ser iniciada com a importação do React
import { Text, View, StyleSheet } from 'react-native'; //Importando um elementos do React Native

export default function App() { //Aqui exportamos o App
  return ( //Deve retornar um elemento
    <View style={style.container} > {/*Elemento de caixa, como se fosse uma DIV. Recebem o objeto container da linha 15*/}
      <Text>
        Olá!
      </Text>
      <Text> {/* Elemento de texto */}
      NLW#5
      </Text>
    </View>
  )
}

const style = StyleSheet.create({ //Criei um objeto que recebe os estilos do programa em formato de objeto.
  container: { /*Os elementos utilizados em style servem para centralizar o texto na página. */
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
