import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //Define como será o container de navegação

import StackRoutes from './stack.routes';

//Container de navegação que receberá as Screens presentes em stack.routes.tsx
const Routes = () => ( 
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )


export default Routes;
 //Todos o arquivo será exportado ao chamar por "Routes"