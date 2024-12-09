import React from 'react';
import {
	SafeAreaView,
	Text,
	useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/utils/Button/Button';
import AppBar from './src/components/App-bar/AppBar';
import Container from './src/components/Container/Container';
import StyledText from './src/components/utils/Text/StyledText';
import HomeBanner from './src/components/Home-banner/HomeBanner';

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView>
			<Container>
				<Button variant="primary" title="Log in" />
				<StyledText type="para">
					My text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, sint debitis iste voluptatem officiis rerum quis possimus id, eum repellat maxime! Laborum expedita eum soluta dicta autem, quas quos reprehenderit!
				</StyledText>
                <HomeBanner />
			</Container>
		</SafeAreaView>
	);
}

export default App;
