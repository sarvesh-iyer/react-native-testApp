import React from 'react'
import { ContainerProps } from './type'
import styled from 'styled-components'
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = (props: ContainerProps) => {

    const StyledView = styled.View`
        padding: 8px;
        background-color: white;
        height: 100%;
    `;

    return (
        <SafeAreaView>
            <ScrollView>
                <StyledView>
                    {props.children}
                </StyledView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Container;
