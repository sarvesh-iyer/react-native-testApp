import { View, Text } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { colors } from '../../assets/colors';
import styled from 'styled-components';

const NavigationBar = ({ route, options }) => {

	const title = getHeaderTitle(options, route.name);

	return (
		<Appbar.Header className="bg-[#f2f2f3] border-b border-[#dbdbdb] m-0">
			<Appbar.Content
				title={title}
			/>
		</Appbar.Header>
	);
};

export default NavigationBar;
