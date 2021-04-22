import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'; //Importando elementos do react-native
/* FUNÇÕES DAS TAGS IMPORTADAS DO REACT-NATIVE:
View = Visualização da página
SafeAreaView = Visualização da página já levando em consideração o NavBar
Text = Campo de texto, equivalente a uma DIV
Image = Imagem
TouchableOpacity = Deixa opaco o campo que foi clicado
StyleSheet = Estilo (Style) da página
*/
import wateringImg from '../assets/watering.png' //importando uma imagem para a tela Welcome
import colors from '../styles/colors'; //Importou o objeto "colors" dentro da pasta "style do projeto, que contém todas as cores utiliadas na construção do protótipo"
import { Button } from '../components/Button';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil.
            </Text>

            <Image source={wateringImg} style={styles.image} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.
            </Text>

            <Button title={'>'} />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ //Editando o estilo da página
    container: {
        flex: 1, //Ocupa a tela inteira
        alignItems: 'center', //Texto alinhado no centro
        justifyContent: 'space-between' //Todos os elementos distribuidos por igual
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 50
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },

    image: {
        width: 292,
        height: 284
    },

});