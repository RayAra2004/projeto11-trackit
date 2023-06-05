import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import {SCButton, SCCadastro, SCForm, SCInput, SCLogin} from "../style/LoginStyle"
import { useContext, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../resources/URL";
import { Usuario } from "../resources/Context";
import {BeatLoader} from 'react-spinners';

export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando]= useState(false);
    const [usuario, setUsuario] = useContext(Usuario);
    const navigate = useNavigate();

    function entrar(e){
        e.preventDefault();
        
        setCarregando(true);

        axios.post(`${URL_BASE}auth/login`, {email, password: senha})
            .then(res => {
                setUsuario(res.data);
                navigate('/hoje');
            })
            .catch(res => {
                alert(res.message);
                setCarregando(false);
            })
    }

    function btnEntrar(){
        if(carregando){
            return(
                <>
                    <SCButton 
                        disabled={carregando} 
                        data-test="login-btn" 
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
                        data-test="login-btn" 
                        type="submit">

                        Entrar

                    </SCButton>
                </>
            );
        }
    }

    return(
        <SCLogin>
            <Logo/>
            <SCForm onSubmit={entrar}>
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
                {btnEntrar()}
            </SCForm>
            <Link data-test="singup-link" to={'/cadastro'}>
                <SCCadastro>Não tem uma conta? Cadastre-se!</SCCadastro>
            </Link>
        </SCLogin>
    );
}