import axios from "axios";
import { SCHabito } from "../style/HabitoStyle";
import DiasSemana from "./DiasSemana";
import { URL_BASE } from "../resources/URL";
import { Usuario } from "../resources/Context";
import { useContext } from "react";

export default function Habito(props){
    const {nome, dias, id, enviou, setEnviou} = props;
    const [usuario, setUsuario] = useContext(Usuario);

    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    function deletarHabito(id){
        const res = confirm('Deseja excluir esse hábito?');
        
        if(res){
            axios.delete(`${URL_BASE}habits/${id}`, config)
                .then(res => setEnviou(enviou + 1))
                .catch(res => alert(res.message))
        }
    }

    return(
        <SCHabito data-test="habit-container">
            <ion-icon data-test="habit-delete-btn" onClick={() => deletarHabito(id)} name="trash-outline"></ion-icon>
            <p data-test="habit-name">{nome}</p>
            <DiasSemana diasEscolhidos={dias} setDiasEscolhidos = {null} disabled = {true}/>
        </SCHabito>
    );
}

