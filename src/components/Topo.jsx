import { useContext } from "react";
import { Usuario } from "../Context";
import { SCImage, SCNome, SCTopo } from "../style/TopoStyle";

export default function Topo(){
    const [usuario, setUsuario] = useContext(Usuario);

    return(
        <SCTopo data-test="header">
                <SCNome>Trackit</SCNome>
                <SCImage data-test="avatar" src={usuario.image}/>
        </SCTopo>
    );
}

