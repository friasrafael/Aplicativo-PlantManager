import React from 'react'; //Arquivo que controlará as condições da navegação, as telas do app e como ele deve ser executada
import { createStackNavigator } from '@react-navigation/stack'; //Importando a navegação do React

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (

    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >

        {/* <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />  */}

        <stackRoutes.Screen
            name="PlantSelect"
            component={PlantSelect}
        />

        <stackRoutes.Screen
            name="PlantSave"
            component={PlantSave}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;

// const AppRoutes: React.FC = () => ( //Tipando o componente para um React Functional Component

//     <stackRoutes.Navigator //Pilha de navegação com algumas propriedades incluidas 
//         headerMode="none" //Não aparecer o header
//         screenOptions={{
//             cardStyle: {
//                 backgroundColor: colors.white //O App terá a cor branca por padrão
//             },
//         }}
//     >

//         <stackRoutes.Screen //Definir a navegação das telas
//             name="Welcome" //Nome da tela
//             component={Welcome} //Componente que eu quero renderizar quando o "name" for chamado de Welcome
//         />

//         <stackRoutes.Screen //Definir a navegação das telas
//             name="UserIdentification" //Nome da tela
//             component={UserIdentification} //Componente que eu quero renderizar
//         />

//         <stackRoutes.Screen //Definir a navegação das telas
//             name="Confirmation" //Nome da tela
//             component={Confirmation} //Componente que eu quero renderizar
//         />

//     </stackRoutes.Navigator>
// )

// export default AppRoutes; //Preparando para exportar a navegação