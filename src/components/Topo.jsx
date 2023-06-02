import { useContext } from "react";
import { Usuario } from "../Context";
import { SCImage, SCNome, SCTopo } from "../style/TopoStyle";

export default function Topo(){
    const [usuario, setUsuario] = useContext(Usuario);

    return(
        <SCTopo>
                <SCNome>Trackit</SCNome>
                <SCImage src={usuario.image}/>
        </SCTopo>
    );
}

