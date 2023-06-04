import { useContext, useEffect, useState } from "react";
import { Usuario } from "../Context";
import Menu from "../components/Menu";
import Topo from "../components/Topo";
import { SCHabitos, SCCriarHabitos, SCMeusHabitos, SCCadastrandoHabito, SCBody, SCCancelar, SCBtnSalvar, SCOpcoes } from "../style/HabitosStyle";
import axios from "axios";
import { URL_BASE } from "../const/URL";
import DiasSemana from "../components/DiasSemana";
import Habito from "../components/Habito";
import {BeatLoader} from 'react-spinners';

export default function Habitos(){

    const [usuario, setUsuario] = useContext(Usuario);
    const [habitos, setHabitos] = useState(undefined);
    const [cadastrando, setCadastrando] = useState(false);
    const [diasEscolhidos, setDiasEscolhidos] = useState([]);
    const [nomeHabito, setNomeHabito] = useState('');
    const [enviou, setEnviou] = useState(0);
    const [carregando, setCarregando] = useState(false);

    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    useEffect(() => {
        axios.get(`${URL_BASE}habits`, config)
            .then(res => setHabitos(res.data))
            .catch(res => alert(res.message));
    }, [enviou])
    
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
        }else{
            return(
                <SCMeusHabitos>
                    {habitos.map(habito => 
                        <Habito
                            key={habito.id}
                            id = {habito.id}
                            nome = {habito.name}
                            dias = {habito.days}
                            enviou = {enviou}
                            setEnviou = {setEnviou}
                        />
                    )}
                </SCMeusHabitos>
            );
        }

    }

    function enviarHabito(){
        const objHabito = {
            name: nomeHabito,
	        days: diasEscolhidos
        }

        setCarregando(true);

        axios.post(`${URL_BASE}habits`, objHabito, config)
            .then(res => {
                setEnviou(enviou + 1);
                setCadastrando(false);
                setNomeHabito('');
                setDiasEscolhidos([]);
                setCarregando(false);
            })
            .catch(res => {
                alert(res.message);
                setCarregando(false);
            })
    }

    function btnSalvar(){
        if(carregando){
            return(
                <>
                    <SCBtnSalvar> <BeatLoader loading={carregando} color={'#FFFFFF'}/> </SCBtnSalvar>
                </>
            );
        }else{
            return(
                <>
                    <SCBtnSalvar onClick={() => enviarHabito()}>Salvar</SCBtnSalvar>
                </>
            );
        }
    }

    function cadastrarHabito(){
        if(cadastrando){
            return(
                <SCCadastrandoHabito>
                    <input disabled={carregando} value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} placeholder="nome do hábito"/>
                    <DiasSemana diasEscolhidos = {diasEscolhidos} setDiasEscolhidos = {setDiasEscolhidos} disabled={carregando}/>
                    <SCOpcoes>
                        <SCCancelar onClick={() => setCadastrando(false)}>Cancelar</SCCancelar>
                        {btnSalvar()}
                    </SCOpcoes>
                </SCCadastrandoHabito>
            );
        }else{
            return(<></>);
        }
    }

    return(
        <SCHabitos>
            <Topo/>
            <SCBody>
                <SCCriarHabitos>
                    <p>Meus Hábitos</p>
                    <button onClick={() => setCadastrando(true)}>+</button>
                </SCCriarHabitos>
                {cadastrarHabito()}
                {meusHabitos()}
            </SCBody>
            <Menu/>
        </SCHabitos>
    );
}