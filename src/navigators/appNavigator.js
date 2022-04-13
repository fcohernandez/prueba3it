import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import FullDetail from '../screens/FullDetail';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    const indicator = useSelector(state => state.root.indicator)
    return(
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{title: 'Inicio', headerTitleAlign: 'center'}}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail} 
                options={{title: indicator && indicator.nombre || 'Detalle', headerTitleAlign: 'center'}}    
            />
            <Stack.Screen 
                name="FullDetail" 
                component={FullDetail} 
                options={{title: indicator && indicator.nombre || 'Detalle', headerTitleAlign: 'center'}}    
            />
        </Stack.Navigator>
    )
}

export default AppNavigator