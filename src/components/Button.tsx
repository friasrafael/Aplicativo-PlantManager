import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps { //Quem receber a propriedade ButtonProps será obrigado a atribuir um title do tipo string
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) { //O botão recebe um objeto do tipo ButtonProps
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest} >

            <Text style={styles.buttonText}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ //Editando o estilo da página

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },

    buttonText: {
        color: colors.white,
        fontSize: 24,
    }

});