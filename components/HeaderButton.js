import { COLORS } from '../constants';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import React from 'react';

//import { Ionicons } from '@expo/vector-icons';



const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    //IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : COLORS.HEADER}
  />
)

export default CustomHeaderButton;