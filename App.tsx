import React from 'react';
import {
	SafeAreaView,
	Text,
	useColorScheme,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/utils/Button/Button';
import Container from './src/components/Container/Container';
import StyledText from './src/components/utils/Text/StyledText';
import HomeBanner from './src/components/Home-banner/HomeBanner';
import BookCarousel from './src/components/Book-carousel/BookCarousel';
import { MaterialIcon } from './src/components/utils/Icon';

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView>
			<Container>
                <MaterialIcon size={30} color="black" name="arrow-bottom-right-thin-circle-outline" />
                <MaterialIcon size={40} color="black" name="instagram" />

                <HomeBanner />
                <BookCarousel />
			</Container>
		</SafeAreaView>
	);
}

export default App;
