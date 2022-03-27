import React, { createContext } from "react";

import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext();

export const RegisterProvider = ({children}) =>{

    const navigate = useNavigate();

    const register = (login, password, confpassword) => {
        console.log("register", { login, password, confpassword });
        if (validate(login, password, confpassword)){
        const registereduser = {
            "login": login,
            "password": password
        }

        var userslist = [];
        const users = localStorage.getItem('users');

        if (users){
            userslist = JSON.parse(users);
        
        }

        userslist.push(registereduser);
        localStorage.setItem("users", JSON.stringify(userslist));

        }
        
    }

    const validate = (login, password, confpassword) => {
        var mensagemErro = "";
        var mensagem = "Usuário Registrado com sucesso!";
        const regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,}$/;
        if (login === "" || password === "" || confpassword === ""){
            mensagemErro += "Todos os campos são obrigatórios! \n";
        }
        
        if (!regex.test(password)){
            mensagemErro += "Password inválido! \n"; 
        }

        if (password !== confpassword){
            mensagemErro += "Password e confirmação devem ser iguais! \n";
        }

        if (mensagemErro === ""){
            alert(mensagem);
            return true;
        }else{
            alert(mensagemErro);
            return false;
        }
    }

    const logg = () => {
        navigate("/")
    };


    return (
        <RegisterContext.Provider value = {{logg, register}}>
            {children}
        </RegisterContext.Provider>
    );
};