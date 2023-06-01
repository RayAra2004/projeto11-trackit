import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { SCCadastro, SCForm, SCInput, SCButton, SCLogin } from "../style/CadastroStyle";
import { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../const/URL";

export default function Cadastro(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');

    const navigate = useNavigate();

    function cadastrar(e){

        e.preventDefault();

        const objCadastro = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }
        
        axios.post(`${URL_BASE}auth/sign-up`, objCadastro)
            .then(res => navigate('/'))
            .catch(res => alert(res.message))
    }

    return(
        <SCCadastro>
            <Logo/>
            <SCForm onSubmit={cadastrar}>
                <SCInput name="email" id="email" type="email" placeholder="email" 
                value={email} onChange={e => setEmail(e.target.value)}

                />

                <SCInput name="senha" id="senha" type="password" placeholder="senha"
                    value={senha} onChange={e => setSenha(e.target.value)}
                />
                <SCInput name="nome" id="nome" type="text" placeholder="nome"
                    value={nome} onChange={e => setNome(e.target.value)}
                />
                <SCInput name="foto" id="foto" type="text" placeholder="foto"
                    value={foto} onChange={e => setFoto(e.target.value)}
                />

                <SCButton type="submit">Cadastrar</SCButton>
            </SCForm>
            <Link to={'/'}>
                <SCLogin>Já tem uma conta? Faça login!</SCLogin>
            </Link>
        </SCCadastro>
    );
}