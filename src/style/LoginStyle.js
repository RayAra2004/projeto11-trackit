import styled from "styled-components"

export const SCLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
export const SCForm = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`
export const SCInput = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 10px;

    ::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

export const SCButton = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    opacity: ${props => props.disabled ? '0.7' : '1'};
`

export const SCCadastro = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 20px;
`