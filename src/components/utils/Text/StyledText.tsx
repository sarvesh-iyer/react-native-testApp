import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import { TextProps } from './types';
import { colors } from '../../../assets/colors';

const StyledText = (props: TextProps) => {

    let {
        type,
        weight,
    } = props;

    const getFontWeightValue = (weightText?: String) => {
        return weightText === 'light' ? 300 :
        weightText === 'normal' ? 400 :
        weightText === 'medium' ? 500 :
        weightText === 'semibold' ? 600 :
        weightText === 'bold' ? 700 :
        weightText === 'extrabold' ? 800 : 400;
    };

    const StylizedText = type === 'heading' ?
        styled.Text`
            color: ${colors.text};
            font-size: 24px;
            line-height: 32px;
            font-weight: ${getFontWeightValue(weight)};
        ` 
        : type === 'para' ? styled.Text`
            color: ${colors.text};
            font-size: 16px;
            line-height: 28px;
            font-weight: ${getFontWeightValue(weight)};
        `
        : type === 'big' ? styled.Text`
            color: ${colors.text};
            font-size: 34px;
            line-height: 50px;
            font-weight: ${getFontWeightValue(weight)};
        `
        : type === 'small' ? styled.Text`
            color: ${colors.text};
            font-size: 14px;
            line-height: 26px;
            font-weight: ${getFontWeightValue(weight)};
        `
        : styled.Text`
            color: ${colors.text};
            font-size: 16px;
            line-height: 28px;
            font-weight: ${getFontWeightValue(weight)};
        `

    return (
        <StylizedText>{props.children}</StylizedText>
    );
};

export default StyledText;
