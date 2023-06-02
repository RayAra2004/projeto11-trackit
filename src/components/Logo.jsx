import { SCNomeLogo, SCImgLogo } from '../style/LogoStyle';
import logo from './../assets/grafico.png'

export default function Logo(){
    return(
        <>
            <SCImgLogo src={logo}/>
            <SCNomeLogo>Trackit</SCNomeLogo>
        </>
    );
}

