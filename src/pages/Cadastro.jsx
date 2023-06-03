import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { SCCadastro, SCForm, SCInput, SCButton, SCLogin } from "../style/CadastroStyle";
import { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../const/URL";
import {BeatLoader} from 'react-spinners';

export default function Cadastro(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    function cadastrar(e){

        e.preventDefault();

        setCarregando(true);

        const objCadastro = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }
        
        axios.post(`${URL_BASE}auth/sign-up`, objCadastro)
            .then(res => navigate('/'))
            .catch(res => {
                alert(res.message);
                setCarregando(false);
            })
    }

    function btnCadastrar(){
        if(carregando){
            return(
                <>
                    <SCButton
                        disabled={carregando} 
                        data-test="singup-btn" 
                        type="submit">

                        <BeatLoader loading={carregando} color={'#FFFFFF'}/>

                    </SCButton>
                </>
            );
        }else{
            return(
                <>
                    <SCButton
                        disabled={carregando} 
                        data-test="singup-btn" 
                        type="submit">

                        Cadastrar

                    </SCButton>
                </>
            );
        }
        
    }

    return(
        <SCCadastro>
            <Logo/>
            <SCForm onSubmit={cadastrar}>
                <SCInput
                    disabled={carregando} 
                    data-test="email-input" 
                    name="email" id="email" type="email" placeholder="email" 
                    value={email} onChange={e => setEmail(e.target.value)}

                />

                <SCInput
                    disabled={carregando} 
                    data-test="password-input" 
                    name="senha" id="senha" type="password" placeholder="senha"
                    value={senha} onChange={e => setSenha(e.target.value)}
                />
                <SCInput 
                    disabled={carregando} 
                    data-test="user-name-input" 
                    name="nome" id="nome" type="text" placeholder="nome"
                    value={nome} onChange={e => setNome(e.target.value)}
                />
                <SCInput 
                    disabled={carregando} 
                    data-test="user-image-input" 
                    name="foto" id="foto" type="text" placeholder="foto"
                    value={foto} onChange={e => setFoto(e.target.value)}
                />
                {btnCadastrar()}          
            </SCForm>
            <Link data-test="login-link" to={'/'}>
                <SCLogin>Já tem uma conta? Faça login!</SCLogin>
            </Link>
        </SCCadastro>
    );
}