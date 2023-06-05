import Menu from "../components/Menu";
import Topo from "../components/Topo";
import { SCBody, SCTituloHistorico, SCMsgEmBreve } from "../style/HistoricoStyle";

export default function Historico(){
    return(
        <>
            <Topo/>
            <SCBody>
                <SCTituloHistorico>Histórico</SCTituloHistorico>
                <SCMsgEmBreve>Em breve você poderá ver o histórico dos seus hábitos aqui!</SCMsgEmBreve> 
            </SCBody>
            <Menu/>
        </>
    );
}