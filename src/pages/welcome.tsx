import React from 'react';
import { View, Text, Image } from 'react-native';

import wateringImg from '../assets/watering.png' //importando uma imagem para a tela Welcome

export function Welcome() {
    return (
        <View>
            <Text>
                Gerencie suas plantas de forma fácil
            </Text>

            <Image source={wateringImg} />

        </View>
    )
}