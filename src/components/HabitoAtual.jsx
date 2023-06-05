import { useContext, useState } from "react";
import { SCHabito, SCNomeHabito, SCSequencia, SCFeito } from "../style/HabitoAtualStyle";
import check from './../assets/check.svg'
import { Usuario } from "../resources/Context";
import { URL_BASE } from "../resources/URL";
import axios from "axios";

export default function HabitoAtual(props){
    const {name, done, currentSequence, highestSequence, id} = props.habito;
    const { atualizaPagina, setAtualizaPagina} = props;
    const [usuario, setUsuario] = useContext(Usuario);
    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }
    
    
    function atualizaEstado(done){
        if(done){
            axios.post(`${URL_BASE}habits/${id}/uncheck`, {}, config)
                .then(res => setAtualizaPagina(atualizaPagina + 1))
                .catch(res => alert(res.message))
        }else{
            axios.post(`${URL_BASE}habits/${id}/check`, {}, config)
                .then(res => setAtualizaPagina(atualizaPagina + 1))
                .catch(res => alert(res.message))
        }
        
    }
    
    return(
        <SCHabito data-test="today-habit-container">
           <SCNomeHabito data-test="today-habit-name">{name}</SCNomeHabito> 
           <SCSequencia data-test="today-habit-sequence" booleanCor={done}>Sequencia atual: <span>{currentSequence} dias</span> </SCSequencia>
           <SCSequencia data-test="today-habit-record" booleanCor={(currentSequence === highestSequence && currentSequence > 0)}>Seu recorde: <span>{highestSequence} dias</span></SCSequencia>
           <SCFeito data-test="today-habit-check-btn" onClick={() => atualizaEstado(done)} done = {done}>
                <img src={check}/>
           </SCFeito>
        </SCHabito>
    );
}

