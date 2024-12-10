import { View, Text, Image } from 'react-native';
import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import Book from "../../../assets/images/book.png";
import Book2 from "../../../assets/images/art_of_war.webp";
import Button from '../Button/Button';

interface BookCardProps {
    classname: HTMLProps<HTMLElement>['className']
}

const BookCard = ({ classname }: BookCardProps) => {

    const StyledCard = styled.View`
        border-radius: 8px;
        background-color: ${colors.bg_gray};
        padding: 12px;
        height: min-content;
    `;

    return (
        <StyledCard className={classname}>
            <View>
                <View className="overflow-hidden w-[160px] h-[240px] mx-auto">
                    <Image
                        source={Book}
                        resizeMode="cover"
                        className="h-full w-full"
                    />
                </View>
            </View>
            <View className="mt-2 ml-1 text-">
                <Text
                    className="text-base font-medium w-36"
                    numberOfLines={2}
                >
                    White Nights White Nights  Nights White Nights
                </Text>
                <Text
                    numberOfLines={1}
                    className="text-sm mt-1 w-36"
                >
                    by Fyodor Dostoevsky sadasd as dsa
                </Text>
            </View>
            <Button
                variant="primary"
                title="Chat"
                btnClass="mt-5"
            />
        </StyledCard>
    );
};

export default BookCard;
