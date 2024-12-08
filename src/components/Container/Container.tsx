import React from 'react'
import { ContainerProps } from './type'
import styled from 'styled-components'


const Container = (props: ContainerProps) => {

    const StyledView = styled.View`
        padding: 8px;
        background-color: white;
        height: 100%;
    `;


    return (
        <StyledView>
            {props.children}
        </StyledView>
    )
}

export default Container