import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Alert
} from 'react-native'; //Responsável por subir o conteúdo da tela quando o teclado é acionado
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false); //Verifica se o foco está no input. Neste caso, o padrão é false.
    const [isFilled, setIsFilled] = useState(false); //Vetifica se temconteúdo no input
    const [name, setName] = useState<string>(); //Armazena o nome do usuário


    const navigation = useNavigation();

    async function handleSubmit() {
        if (!name)
            return Alert.alert('Queremos saber o seu nome! 😢')


        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            });
        } catch {
            Alert.alert('Não foi possível salvar o seu nome! 😥')
        }
    }

    function handleInputBlur() {
        setIsFocused(false); //Executa se o foco no input for false
        setIsFilled(!!name); //Pega o name quando o foco sair do input
    }

    function handleInputFocus() {
        setIsFocused(true); //Executa se o foco no input for true
    }

    function handleInputChange(value: string) {
        setIsFocused(!!value) //Executa se o conteúdo dentro do input for verdadeiro
        setName(value) //Armazena o valor do input

    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😎' : '😄'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos {'\n'}
                            chamar você?
                            </Text>
                            <TextInput
                                style={[ //É possível passar mais de um estilo a um elemento criando um Array
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green } //Quando o isFocused for verdadeiro a ,borda do input mudará para verde. Quando algo for digitado ele se manterá verde enquanto houver conteúdo.
                                ]}
                                placeholder='Digite um nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange} //
                            />
                            <View style={styles.footer}>
                                <Button
                                    title='Confirmar'
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },

    emoji: {
        fontSize: 44
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 20,
        lineHeight: 32,
        fontFamily: fonts.text
    },

    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20

    }
});