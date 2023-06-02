import Menu from "../components/Menu";
import Topo from "../components/Topo";
import { SCHoje } from "../style/HojeStyle";

export default function Hoje(){
    return(
        <SCHoje>
            <Topo/>
    
            <Menu/>
        </SCHoje>
    );
}