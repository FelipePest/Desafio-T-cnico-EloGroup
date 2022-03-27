import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import './styles.css';

import imagem from "../../elogroup.jpg";

const LoginPage = () => {

    const{ authenticated, logged, register } = useContext(AuthContext);


    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () =>{
        console.log("submit", {login, password});
        logged(login, password);
    };

    
    const handleRegister = () => {
        register();
    };

    return (
        <div id="login">
            <form className="form" >
            <h1 className="title">Login</h1>
            <img id = "img" src={imagem}/>
                <div className="field">
                    <label htmlFor="usuario">Usuário*</label>
                    <input type="usuario" name="usuario" id="login" value={login} onChange={(ev) => setLogin(ev.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="confpassword" id="confpassword" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                </div>
                <div className="actions">
                    <button type="submit" onClick={handleSubmit} >Entrar</button>
                </div>
                <div className="actions">
                    <button type="register" onClick={handleRegister} >Registrar</button>
                </div>
            </form>
        </div>
    );

};

export default LoginPage;