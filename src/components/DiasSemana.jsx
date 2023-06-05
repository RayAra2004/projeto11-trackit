import { SCBtnDia, SCDiasSemana } from "../style/DiasSemanaStyle";

export default function DiasSemana(props){
    const {diasEscolhidos, setDiasEscolhidos, disabled} = props;
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return(
        <SCDiasSemana>
            {dias.map( (dia, i) =>
                <DiaSemana 
                    key = {i} 
                    dia = {dia} 
                    diasEscolhidos = {diasEscolhidos} 
                    setDiasEscolhidos={setDiasEscolhidos}
                    indice = {i}
                    disabled = {disabled}
                    />
            )}
        </SCDiasSemana>
    );
}


function DiaSemana(props){
    const {dia, diasEscolhidos, setDiasEscolhidos, indice, disabled} = props;

    return(
        <>
            <SCBtnDia
                data-test="habit-day" 
                onClick={() => escolherDia(diasEscolhidos, setDiasEscolhidos, indice)}
                selecionado = {diasEscolhidos.includes(indice)}
                disabled = {disabled}
            >            
            {dia}
            </SCBtnDia>
        </>
    );
}

function escolherDia(diasEscolhidos, setDiasEscolhidos, indice){
    if(diasEscolhidos.includes(indice)){
        const novoDiasEscolhidos = [...diasEscolhidos];
        const index = novoDiasEscolhidos.indexOf(indice);
        novoDiasEscolhidos.splice(index, 1);
        setDiasEscolhidos(novoDiasEscolhidos)
    }else{
        setDiasEscolhidos([...diasEscolhidos, indice]);
    }
    
}