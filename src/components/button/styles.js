import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    height: 35px;

    border: 0;
    margin: 0;
    padding: 12px 24px;
    border-radius: 5px;
    
`