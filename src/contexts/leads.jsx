import React, { useState, useEffect , createContext } from "react";

import { useNavigate } from "react-router-dom";

export const LeadsContext = createContext();

export const LeadsProvider = ({children}) =>{

    const navigate = useNavigate();

    const registerLeads = (nome, telefone, email, one, two, three, four) => {
        if (validateLead(nome, telefone, email, one, two, three, four)){

            const tablelead = {
                "cliente": nome,
                "dados": "",
                "reuniao": ""
            }

            const registeredlead = {
                "nome" : nome,
                "telefone" : telefone,
                "email" : email,
                "RPA" : one,
                "Produto Digital" : two,
                "Analytics" : three,
                "BPM" : four
            }

            var tableleads = [];
            var registeredleads = [];

            const leadstable = localStorage.getItem('tableleads');
            const leadsregistered = localStorage.getItem('registeredleads');

            if (leadstable){
                tableleads = JSON.parse(leadstable);
            
            }

            if (leadsregistered){
                registeredleads = JSON.parse(leadsregistered);
            
            }

            registeredleads.unshift(registeredlead);
            localStorage.setItem("registeredleads", JSON.stringify(registeredleads));

            tableleads.unshift(tablelead);
            localStorage.setItem("tableleads", JSON.stringify(tableleads));

            navigate("/home")
        }

    }

    const voltarHome = () => {
        navigate("/home")
    }

    const validateLead = (nome, telefone, email, one, two, three, four) => {
        var mensagemErro = "";
        var mensagem = "Lead Incluído com sucesso!";
        var regextel = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/
        var regexmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if (nome === "" || telefone === "" || email === "" || ( one === false && two === false && three === false && four === false )){
            mensagemErro += "Todos os campos são obrigatórios! \n";
        }

        if (!regextel.test(telefone)){
            mensagemErro += "Telefone inválido!\n";
        }

        if (!regexmail.test(email)){
            mensagemErro += "E-mail inválido! \n"
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
        <LeadsContext.Provider value = {{logg, registerLeads, voltarHome}}>
            {children}
        </LeadsContext.Provider>
    );
};