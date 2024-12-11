import { View, Text } from 'react-native'
import React from 'react'
import Container from '../components/Container/Container';
import HomeBanner from '../components/Home-banner/HomeBanner';
import BookCarousel from '../components/Book-carousel/BookCarousel';

const Home = () => {
    return (
        <Container>
            <HomeBanner />
            <BookCarousel />
        </Container>
    );
};

export default Home;
