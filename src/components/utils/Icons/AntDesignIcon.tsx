import React from 'react';
import AIcon from 'react-native-vector-icons/AntDesign';

AIcon.loadFont();

export interface IconProps {
  size: number;
  name: string;
  color: string;
}

export const AntIcon = ({size, name, color}: IconProps) => (
  <AIcon name={name} size={size} color={color} />
);