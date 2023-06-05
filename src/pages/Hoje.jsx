import Menu from "../components/Menu";
import Topo from "../components/Topo";
import { SCHoje, SCBody, SCInfosUser, SCDate, SCInfoConcluidos, SCHabitosAtuais } from "../style/HojeStyle";
import { dataFinal } from "../resources/Date";
import { HabitosConcluidos, Usuario } from "../resources/Context";
import { useContext, useEffect, useState } from "react";
import { URL_BASE } from "../resources/URL";
import axios from "axios";
import HabitoAtual from "../components/HabitoAtual";


export default function Hoje(){

    const [usuario, setUsuario] = useContext(Usuario);
    const [habitosConcluidos, setHabitosConcluidos] = useContext(HabitosConcluidos);
    const [atualizaPagina, setAtualizaPagina] = useState(0);
    const [qtdHabitosConcluidos, setQtdHabitosConcluidos] = useState(0);
    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    const [habitosHoje, setHabitosHoje] = useState(undefined);

    useEffect(() =>{
        axios.get(`${URL_BASE}habits/today`, config)
            .then(res => {
                setHabitosHoje(res.data);
                let qtd = 0;
                res.data.map(habito => {
                    if(habito.done){
                        qtd += 1;
                        setQtdHabitosConcluidos(qtd)
                    }
                })
                if(habitosHoje !== undefined){
                    setHabitosConcluidos(100 * qtd / habitosHoje.length);
                }
            })
            .catch(res => alert(res.message))
        
    }, [atualizaPagina, qtdHabitosConcluidos]);

    function habitos(){
        
        if(habitosHoje !== undefined){
            return(
                <>
                    {habitosHoje.map( habito =>
                            <HabitoAtual 
                                key={habito.id} 
                                habito = {habito}
                                atualizaPagina = {atualizaPagina}
                                setAtualizaPagina = {setAtualizaPagina}
                                />
                        )}
                </>
            );
        }else{
            return(
                <p>Carregando...</p>
            );
        }     
    }

    function infosConcluidos(){
        if(habitosConcluidos > 0){
            return(
                <SCInfoConcluidos data-test="today-counter" booleanCor = {true}>{habitosConcluidos}% dos hábitos concluídos</SCInfoConcluidos>
            );
        }else{
            return(
                <SCInfoConcluidos data-test="today-counter" booleanCor = {false}>Nenhum hábito concluído ainda</SCInfoConcluidos>
            );
        }
    }
    return(
        <SCHoje>
            <Topo/>
            <SCBody>
                <SCInfosUser>
                    <SCDate data-test="today">{dataFinal}</SCDate>
                    {infosConcluidos()}
                </SCInfosUser>
                <SCHabitosAtuais>
                    {habitos()}
                </SCHabitosAtuais>
            </SCBody>
            <Menu/>
        </SCHoje>
    );
}