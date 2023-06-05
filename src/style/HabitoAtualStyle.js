import styled from "styled-components";

export const SCHabito = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-top: 15px;
    position: relative;
`

export const SCNomeHabito = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 5px;
`

export const SCSequencia = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-bottom: 2px;
    span{
        color: ${props => props.booleanCor ? '#8FC549' : '#666666'};
    }
`

export const SCFeito = styled.div`
    position: absolute;
    top: 13px;
    right: 13px;
    width: 69px;
    height: 69px;
    background-color: ${props => props.done ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`