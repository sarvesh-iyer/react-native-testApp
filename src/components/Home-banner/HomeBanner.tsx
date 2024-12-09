import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import StyledText from '../utils/Text/StyledText';
import BGImg from '../../assets/images/banner-bg.png';
import SunTuz from '../../assets/images/sun-tzu.png';
import BookImg from '../../assets/images/art_of_war.webp';
import Button from '../utils/Button/Button';

const HomeBanner = () => {

    const StyledBox = styled.ImageBackground`
        border-radius: 16px;
        padding: 24px;
        /* display: flex;
        gap: 20px; */
        overflow: hidden;
        margin-top: 16px;
        margin-bottom: 16px;
    `;

    return (
        <StyledBox source={BGImg} resizeMode="cover">
            <View className="flex flex-row gap-4 max-h-[155px]">
                <Image
                    source={SunTuz}
                />
                <Image
                    source={BookImg}
                    resizeMode="contain"
                    resizeMethod='auto'
                    className="h-full"
                />
            </View>
            <View>
                <StyledText type="big" classname="mt-4">
                    Chat with <StyledText type="big" weight="semibold">Sun Tzu</StyledText>
                </StyledText>
                <StyledText type="para" classname="mt-5">
                    In The Art of War, the renowned Chinese strategist Sun Tzu delves into timeless principles of warfare, strategy, leadership, execution, discipline, and ethics. His insights from over two millennia ago remain profoundly relevant today. With Chai Reader, you can now engage directly with the wisdom of Sun Tzu. Ask him questions, explore his strategies, and gain a deeper understanding of his ideas.
                </StyledText>
                <Button variant="white" title="Chat now" btnClass="mt-4" />
            </View>
        </StyledBox>
    );
};

export default HomeBanner