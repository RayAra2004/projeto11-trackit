import styled from "styled-components";

export const SCBtnDia = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.selecionado ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid ${props => props.selecionado ? '#CFCFCF' : '#D5D5D5'};
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.selecionado ? '#FFFFFF' : '#DBDBDB'};
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SCDiasSemana = styled.div`
    display: flex;
    /* margin-left: -65px; */
`