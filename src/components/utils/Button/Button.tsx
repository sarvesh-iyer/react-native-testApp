import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import { colors } from '../../../assets/colors';
import { ButtonProps } from './type';

const Button = (props: ButtonProps) => {

	let {
		variant,
        title,
        btnClass,
        textClass,
	} = props;


	const StyledButton = variant === 'white' ?
    styled.View`
        border-radius: 8px;
        padding: 14px 16px;
        background-color: ${colors.base_white};
    `
    : styled.View`
		border-radius: 8px;
		padding: 14px 16px;
		background-color: ${variant === 'primary' ? colors.accent : colors.transparent};
		border: ${variant !== 'primary' ? `1px solid ${colors.light_gray}` : 'none'};
    `;
	const SyledText = variant === 'white' ?
    styled.Text`
		text-align: center;
		color: ${colors.base_black};
		font-size: 20px;
		line-height: 20px;
		font-weight: 500;
	`
    : styled.Text`
		text-align: center;
		color: ${variant === 'primary' ?  colors.base_white : colors.light_gray};
		font-size: 20px;
		line-height: 20px;
		font-weight: 500;
	`;

	return (
		<StyledButton className={btnClass}>
			<SyledText className={textClass}>{title}</SyledText>
		</StyledButton>
	);
};

export default Button;

