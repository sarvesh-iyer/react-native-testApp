/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Cards from './src/components/cards/Cards';

function App(): React.JSX.Element {

	return (
		<SafeAreaView>
			<Text>Hello</Text>
			<Cards />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	
});

export default App;
