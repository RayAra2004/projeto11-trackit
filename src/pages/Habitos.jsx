import { useContext, useEffect, useState } from "react";
import { Usuario } from "../Context";
import Menu from "../components/Menu";
import Topo from "../components/Topo";
import { SCHabitos, SCCriarHabitos, SCMeusHabitos } from "../style/HabitosStyle";
import axios from "axios";
import { URL_BASE } from "../const/URL";

export default function Habitos(){

    const [usuario, setUsuario] = useContext(Usuario);
    const [habitos, setHabitos] = useState(undefined);

    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }
    useEffect(() => {
        axios.get(`${URL_BASE}habits`, config)
            .then(res => setHabitos(res.data))
            .catch(res => alert(res.message));
        
        
    }, [])
    
    function meusHabitos(){
        if(habitos === undefined){
            return(
                <SCMeusHabitos>
                    <p>Carregando...</p>
                </SCMeusHabitos>
            );
        } if(habitos.length === 0){
            return(
                <SCMeusHabitos>
                    <p>Você não tem nenhum hábito<br/>cadastrado ainda. Adicione um hábito<br/>para começar a trackear!</p>
                </SCMeusHabitos>
            );
        }

    }

    return(
        <SCHabitos>
            <Topo/>
            <SCCriarHabitos>
                <p>Meus Hábitos</p>
                <button>+</button>
            </SCCriarHabitos>
            {meusHabitos()}
            <Menu/>
        </SCHabitos>
    );
}