import React from 'react'
import { ContainerProps } from './type'
import styled from 'styled-components'
import { ScrollView } from 'react-native';


const Container = (props: ContainerProps) => {

    const StyledView = styled.View`
        padding: 8px;
        background-color: white;
        height: 100%;
    `;


    return (
        <ScrollView>
            <StyledView>
                {props.children}
            </StyledView>
        </ScrollView>
    );
};

export default Container;
