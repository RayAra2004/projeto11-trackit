import styled from 'styled-components'
import logo from './../assets/grafico.png'

export default function Logo(){
    return(
        <>
            <SCImgLogo src={logo}/>
            <SCNomeLogo>Trackit</SCNomeLogo>
        </>
    );
}

const SCNomeLogo = styled.p`
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    color: #126BA5;
`

const SCImgLogo = styled.img`
    width: 154px;
    height: 80px;
`