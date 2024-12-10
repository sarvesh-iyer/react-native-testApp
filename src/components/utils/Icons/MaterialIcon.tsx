import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MIcon.loadFont();

export interface IconProps {
  size: number;
  name: string;
  color: string;
}

export const MaterialIcon = ({size, name, color}: IconProps) => (
  <MIcon name={name} size={size} color={color} />
);