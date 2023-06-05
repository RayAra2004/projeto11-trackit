import { useContext } from "react";
import { Usuario } from "../resources/Context";
import { SCImage, SCNome, SCTopo } from "../style/TopoStyle";
import { Link } from "react-router-dom";

export default function Topo(){
    const [usuario, setUsuario] = useContext(Usuario);

    return(
        <SCTopo data-test="header">
                <Link to={'/'}>
                    <SCNome>Trackit</SCNome>
                </Link>
                <SCImage data-test="avatar" src={usuario.image}/>
        </SCTopo>
    );
}

