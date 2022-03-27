import React, { useState, useContext } from "react";

import "./styles.css";

import { RegisterContext } from "../../contexts/register";

import imagem from "../../elogroup.jpg";

const RegisterPage = () => {

    const{ logg, register } = useContext(RegisterContext);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");

    const handleRegister = () => {
        register(login, password, confpassword);
    }

    const handleReturnLoggin = () => {
        logg();
    }

    return(
    <div id="register">
        <div className="form">
        <h1 className="title">Registro de Usuário</h1>
        <img id = "img" src={imagem}/>
            <div className="field">
                <label htmlFor="usuario">Usuário*</label>
                <input type="usuario" name="usuario" id="usuario" value={login} onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="password">Password*</label>
                <input type="password" name="passwordreg" id="passwordreg" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="password">Confirmação Password*</label>
                <input type="password" name="password" id="password" value={confpassword} onChange={(e) => setConfpassword(e.target.value)}/>
            </div>
            <div className="rules">
            <ul>
            <li><small>Todos os campos são obrigatórios.</small></li>
            <li><small>
                Password deve possuir ao menos 8 caracteres, 
            contendo ao menos, um caractere especial, um 
            caractere numérico e um caractere alfanumérico.
            </small></li>
            <li><small>Password e confirmação devem ser iguais.</small></li>
            </ul>
            </div>
            <div className="actions">
                <button onClick={handleRegister}>Registrar</button>
            </div>
            <div className="actions">
                <button onClick={handleReturnLoggin}>Voltar para Login</button>
            </div>
        </div>   
    </div>
        );

    };
export default RegisterPage;