import { COLORS } from '../constants'
import MapScreen from '../screens/MapScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import PlaceListScreen from '../screens/PlaceListScreen'
import { Platform } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// screens






const PlaceStack = createStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        initialRoute="Direcciones"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.HEADER : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.HEADER,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Direcciones"
            component={PlaceListScreen}
            options={{title: 'Direcciones'}} 
        />
        <PlaceStack.Screen
            name="Detalle"
            component={PlaceDetailScreen}
            options={{title: 'Detalle direccion'}} 
        />
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}
            options={{title: 'Nueva direccion'}} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
    </PlaceStack.Navigator>
)


export default PlaceNavigator