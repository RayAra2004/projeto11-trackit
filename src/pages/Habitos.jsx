import Menu from "../components/Menu";
import Topo from "../components/Topo";
import { SCHabitos, SCMeusHabitos } from "../style/HabitosStyle";

export default function Habitos(){
    return(
        <SCHabitos>
            <Topo/>
            <SCMeusHabitos>
                <p>Meus Hábitos</p>
                <button>+</button>
            </SCMeusHabitos>
            <Menu/>
        </SCHabitos>
    );
}