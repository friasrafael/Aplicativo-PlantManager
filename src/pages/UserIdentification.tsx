import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView //Responsável por subir o conteúdo da tela quando o teclado é acionado
} from 'react-native';

import { Button } from '../components/Button';

import { } from '@expo/vector-icons';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function UserIdentification() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            😄
                    </Text>
                        <Text style={styles.title}>
                            Como podemos {'\n'}
                        chamar você?
                    </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite um nome'
                        />
                        <View style={styles.footer}>
                            <Button />
                        </View>
                    </View>
                </View>
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