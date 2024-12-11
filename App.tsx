import React from 'react';
import {
	useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import ViewAllBooks from './src/screens/ViewAllBooks';
import Login from './src/screens/Login';
import { PaperProvider } from 'react-native-paper';
import NavigationBar from './src/components/Navbar/NavigationBar';

export type RootStackParamList = {
    Home: undefined,
    Viewall: {name: string}
}

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';
    const Stack = createNativeStackNavigator();

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						header: (props) => <NavigationBar {...props} />
					}}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Viewall" component={ViewAllBooks} />
					<Stack.Screen name="Login" component={Login} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

export default App;
