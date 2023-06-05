import styled from "styled-components";

export const SCMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
`

export const SCProgressBar = styled.button`
    width: 91px;
    height: 91px;
    position: absolute;
    left: 38vw;
    bottom: 10px;
`

export const SCPRotas = styled.p`
    position: absolute;
    top: 25px;
    left: ${props => props.left};
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;

`