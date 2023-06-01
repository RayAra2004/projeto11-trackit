import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import {SCButton, SCCadastro, SCForm, SCInput, SCLogin} from "../style/LoginStyle"
import { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../const/URL";

export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function entrar(e){
        e.preventDefault();
 

        axios.post(`${URL_BASE}auth/login`, {email, password: senha})
            .then(res => console.log(res.data))
            .catch(res => alert(res.message))
    }

    return(
        <SCLogin>
            <Logo/>
            <SCForm onSubmit={entrar}>
                <SCInput name="email" id="email" type="email" placeholder="email"
                value={email} onChange={e => setEmail(e.target.value)}
                />
                <SCInput name="senha" id="senha" type="password" placeholder="senha"
                value={senha} onChange={e => setSenha(e.target.value)}
                />
                <SCButton type="submit">Entrar</SCButton>
            </SCForm>
            <Link to={'/cadastro'}>
                <SCCadastro>Não tem uma conta? Cadastre-se!</SCCadastro>
            </Link>
        </SCLogin>
    );
}