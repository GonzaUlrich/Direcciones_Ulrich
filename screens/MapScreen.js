import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Image, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useCallback, useLayoutEffect, useState } from 'react'

import { StyleSheet } from 'react-native'

const MapScreen = ({ navigation }) => {
    const [selectedLocation, setSelectedLocation] = useState();
    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const savePickedLocationHandler = useCallback(() => {
        console.log(selectedLocation)
        if (!selectedLocation) return;

        navigation.navigate('Nuevo', { picked: selectedLocation });
    }, [selectedLocation]);

    const selectLocationHandler = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        });
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                onPress={savePickedLocationHandler}
                >
                    <Image
                    style={styles.icon}
                    source = {require("./../components/save.png")}></Image>
                    <Item
                        iconName="save-outline"
                        
                    />
                </TouchableOpacity>
                    
                
            )
        })
    }, [navigation, selectedLocation]);

    let markerCoordinates;
    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        };
    }

    return (
        <MapView
            initialRegion={region}
            style={styles.map}
            onPress={selectLocationHandler}
        >
            {markerCoordinates && (
                <Marker title="Selección" coordinate={markerCoordinates} />
            )}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    icon:{
        height: 50,
        width: 50,
    }
})

export default MapScreen
