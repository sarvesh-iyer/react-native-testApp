import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import StyledText from '../utils/Text/StyledText';
import BookCard from '../utils/Book-card/BookCard';
import { AntIcon } from '../utils/Icons/AntDesignIcon';
import { colors } from '../../assets/colors';

const BookCarousel = () => {
    return (
        <View className="pb-10">
            <View className="px-1 mt-6 mb-3 flex flex-row items-center justify-between">
                <StyledText
                    type="heading"
                    classname="border border-transparent flex-shrink-0 text-3xl font-semibold items-start"
                >
                    Latest
                </StyledText>
                <View className="flex flex-row items-center">
                    <Text className="text-base border border-transparent mr-2">
                        View all
                    </Text>
                    <AntIcon size={18} color={colors.icon} name='rightcircle' />
                </View>
            </View>

            <View className="w-full">
                <ScrollView horizontal className="w-[97%] ml-auto mr-auto">
                    {Array(10).fill(null).map((item, ind) => (
                        <BookCard key={ind} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default BookCarousel;
