import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import StyledText from '../utils/Text/StyledText';
import BGImg from '../../assets/images/banner-bg.png';
import SunTuz from '../../assets/images/sun-tzu.png';
import BookImg from '../../assets/images/art_of_war.webp';
import Button from '../utils/Button/Button';
import { colors } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlightComponent } from 'react-native';

const HomeBanner = () => {

    const navigation = useNavigation();

    const StyledBox = styled.ImageBackground`
        border-radius: 16px;
        padding: 28px;
        overflow: hidden;
        margin-top: 16px;
        margin-bottom: 16px;
    `;

    const handleBtnClick = () => {
        navigation.navigate('Login', {name: 'Login'});
    };

    return (
        <TouchableWithoutFeedback onPress={handleBtnClick}>
            <View className="pt-2">
                <View className="px-1">
                    <StyledText
                        type="big"
                        classname="font-semibold"
                    >
                        Chat with Books and Embark on a Time Travel Adventure!
                    </StyledText>
                    <StyledText type="heading" classname="text-3xl font-semibold mt-6">
                        Exclusive
                    </StyledText>
                </View>
                <StyledBox source={BGImg} resizeMode="cover">
                    <View className="flex flex-row gap-3 max-h-[155px]">
                        <Image
                            source={SunTuz}
                        />
                        <View className="max-w-[120px] w-full h-full">
                            <Image
                                source={BookImg}
                                resizeMode="contain"
                                className="w-full h-full"
                            />
                        </View>
                    </View>
                    <View className="mt-8">
                        <StyledText type="big" classname="!text-white">
                            Chat with <StyledText type="big" weight="semibold" classname="!text-white">Sun Tzu</StyledText>
                        </StyledText>
                        <StyledText type="para" classname="mt-3 !text-white">
                            In The Art of War, the renowned Chinese strategist Sun Tzu delves into timeless principles of warfare, strategy, leadership, execution, discipline, and ethics. His insights from over two millennia ago remain profoundly relevant today. With Chai Reader, you can now engage directly with the wisdom of Sun Tzu. Ask him questions, explore his strategies, and gain a deeper understanding of his ideas.
                        </StyledText>
                        <Button
                            variant="white"
                            title="Chat now"
                            btnClass="mt-9 mb-3 w-[60%]"
                            textClass="text-lg"
                            onPress={handleBtnClick}
                        />
                    </View>
                </StyledBox>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default HomeBanner