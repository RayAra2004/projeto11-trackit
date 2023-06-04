import styled from "styled-components";

export const SCHabitos = styled.div`
    width: 100%;
    background-color: #E5E5E5; 
    /* height: 100svh; */
`

export const SCCriarHabitos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    margin-bottom: 10px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 10px;
    }

    button{
        margin-right: 18px;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border: none;
        border-radius: 4.63636px;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const SCMeusHabitos = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        margin-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

export const SCCadastrandoHabito = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        padding-left: 11px;
        margin-top: 18px;
        margin-bottom: 8px;

        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
`

export const SCCancelar = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
`

export const SCBtnSalvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    margin-left: 25px;
`

export const SCOpcoes = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 130px;
`

export const SCBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 30px;
`