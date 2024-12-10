import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import StyledText from '../utils/Text/StyledText';
import BookCard from '../utils/Book-card/BookCard';
import { AntIcon } from '../utils/Icons/AntDesignIcon';
import { colors } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

const BookCarousel = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleViewAll = () => {
        navigation.navigate('Viewall', {
            name: 'viewAll',
        });
    };

    return (
        <View className="pb-20">
            <View className="px-1 mt-6 mb-3 flex flex-row items-center justify-between">
                <StyledText
                    type="heading"
                    classname="border border-transparent flex-shrink-0 text-3xl font-semibold items-start"
                >
                    Latest
                </StyledText>
                <Pressable
                    className="flex flex-row items-center"
                    onPress={handleViewAll}
                >
                    <Text className="text-base border border-transparent mr-2">
                        View all
                    </Text>
                    <AntIcon size={18} color={colors.icon} name="rightcircle" />
                </Pressable>
            </View>

            <View className="w-full">
                <ScrollView horizontal className="w-[97%] ml-auto mr-auto">
                    {Array(10).fill(null).map((item, ind) => (
                        <BookCard key={ind} classname="mr-5" />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default BookCarousel;
