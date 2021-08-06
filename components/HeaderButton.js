import { COLORS } from '../constants';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import React from 'react';

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    //IconComponent={require('./CameraIcon.png')}
    iconSize={20}
    color={Platform.OS === 'android' ? 'white' : COLORS.HEADER}
  />
)

export default CustomHeaderButton;