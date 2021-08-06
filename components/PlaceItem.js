import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants';
import React from 'react';

const PlaceItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={styles.placeItem}
    >
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    paddingVertical: 19,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.PLUM,
  },
  info: {
    marginLeft: 30,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: COLORS.BLUSH,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: COLORS.SHADOW,
    fontSize: 20,
  }
});

export default PlaceItem;