import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import StyledText from '../utils/Text/StyledText';
import BGImg from '../../assets/images/banner-bg.png'
import { colors } from '../../assets/colors';
import Button from '../utils/Button/Button';

const HomeBanner = () => {

    const StyledBox = styled.ImageBackground`
        border-radius: 16px;
        padding: 24px;
        display: flex;
        gap: 20px;
        overflow: hidden;
        margin-top: 16px;
        margin-bottom: 16px;
    `;

    return (
        <StyledBox source={BGImg} resizeMethod="auto">
            <View>
                <Text>Image box</Text>
            </View>
            <View>
                <StyledText type="big">
                    Chat with <StyledText type="big" weight="semibold">Sun Tzu</StyledText>
                </StyledText>
                <StyledText type="para">
                    In The Art of War, the renowned Chinese strategist Sun Tzu delves into timeless principles of warfare, strategy, leadership, execution, discipline, and ethics. His insights from over two millennia ago remain profoundly relevant today. With Chai Reader, you can now engage directly with the wisdom of Sun Tzu. Ask him questions, explore his strategies, and gain a deeper understanding of his ideas.
                </StyledText>
                <Button variant="white" title="Chat now" />
            </View>
        </StyledBox>
    );
};

export default HomeBanner