import styled from "styled-components";

export const SCHoje = styled.div`
    background-color: #E5E5E5;
    width: 100%;
`

export const SCBody = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 30px;
`

export const SCInfosUser = styled.div`
    margin-top: 70px;
    margin-left: -60px;
    margin-bottom: 30px;
`

export const SCDate = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`

export const SCInfoConcluidos = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => props.booleanCor ? '#8FC549' : '#BABABA'};
    margin-top: 5px;
`

export const SCHabitosAtuais = styled.div`
    margin-bottom: 100px;
`