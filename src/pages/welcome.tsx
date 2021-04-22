import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from 'react-native'; //Importando elementos do react-native
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
import fonts from '../styles/fonts'; //Importa o doc.ts que contém as fontes que serão utilizadas no app
import { Feather } from '@expo/vector-icons'; //Importando biblioteca de ícones do RN. Feather é uma família específica de ícones, existem várias.

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma fácil.
                </Text>

                <Image source={wateringImg}
                    style={styles.image}
                    resizeMode='contain' />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas
                    plantas. Nós cuidamos de lembrar você
                    sempre que precisar.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                >

                    <Feather
                        name='chevron-right'
                        style={styles.buttonIcon}
                    />

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ //Editando o estilo da página
    container: {
        flex: 1, //Ocupa a tela inteira
    },

    wrapper: {
        flex: 1,
        alignItems: 'center', //Texto alinhado no centro
        justifyContent: 'space-around', //Todos os elementos distribuidos por igual
        paddingHorizontal: 20
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 50,
        lineHeight: 34,
        fontFamily: fonts.heading
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },

    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }

});