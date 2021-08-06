import { FlatList, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import { loadPlaces } from '../store/places.action';

const PlaceListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                onPress={() => navigation.push('Nuevo')}>
                    <Image
                    style={styles.icon}
                    source = {require("./../components/CameraIcon.png")}></Image>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        dispatch(loadPlaces());
    }, []);

    const renderItem = data => (
        <PlaceItem
            image={data.item.image}
            address={null}
            title={data.item.title}
            onSelect={() => navigation.push('Detalle')}
        />
    )

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon:{
        height: 50,
        width: 50,
    }

})

export default PlaceListScreen
