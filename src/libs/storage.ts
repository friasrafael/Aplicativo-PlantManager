import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantProps {
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string,];
    frequency: {
        times: number,
        repeat_every: string,
    },
    hour: string;
    dateTimeNotification: Date;
}

export interface StoragePlantProps {
    [id: string]: {
        data: PlantProps;
    }
}

export async function loadPlant(): Promise<PlantProps[]> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const plantsSorted = Object
            .keys(plants)
            .map((plant) => {
                return {
                    ...plants[plant].data,
                    hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
                }

            })

            .sort((a, b) => 
                Math.floor(
                    new Date(a.dateTimeNotification).getTime() /1000 - 
                    Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
                )
            );

            return plantsSorted;

    } catch (error) {
        throw new Error(error);
    }
}