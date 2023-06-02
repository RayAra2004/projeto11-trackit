import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import {SCButton, SCCadastro, SCForm, SCInput, SCLogin} from "../style/LoginStyle"
import { useContext, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../const/URL";
import { Usuario } from "../Context";

export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useContext(Usuario);
    const navigate = useNavigate();

    function entrar(e){
        e.preventDefault();
 

        axios.post(`${URL_BASE}auth/login`, {email, password: senha})
            .then(res => {
                setUsuario(res.data);
                navigate('/hoje');
            })
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