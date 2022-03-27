import React, { useState, useContext } from "react";

import './styles.css'

import  Checkbox  from "../../components/Checkbox";

import { LeadsContext } from "../../contexts/leads";

import imagem from "../../elogroup.jpg";

const LeadsPage = () => {

    const{ registerLeads, voltarHome } = useContext(LeadsContext);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [checkedThree, setCheckedThree] = useState(false);
    const [checkedFour, setCheckedFour] = useState(false);

    function mascaraTel(v){
            v=v.replace(/\D/g,"");
            v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
            v=v.replace(/(\d)(\d{4})$/,"$1-$2");
            setTelefone(v);
        }

    const handleChange = () => {
        setChecked(!checked);
        if(checkedOne !== !checked){
            setCheckedOne(!checkedOne)
        }
        if(checkedTwo !== !checked){
            setCheckedTwo(!checkedTwo)
        }
        if(checkedThree !== !checked){
            setCheckedThree(!checkedThree)
        }
        if(checkedFour !== !checked){
            setCheckedFour(!checkedFour)
        }
    };

    function checkChangeAll(){
        if(checked === true && (!checkedOne === false || !checkedTwo === false || !checkedThree === false || !checkedFour === false)){
            setChecked(!checked);
        }
    }

    const handleChangeOne = () => {
        checkChangeAll();
        setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
        checkChangeAll();
       setCheckedTwo(!checkedTwo);

    };

    const handleChangeThree = () => {
        checkChangeAll();
       setCheckedThree(!checkedThree);
    };

    const handleChangeFour = () => {
        checkChangeAll();
       setCheckedFour(!checkedFour);
    };

    const handleRegisterLeads = () =>{
        registerLeads(nome, telefone,email,checkedOne, checkedTwo, checkedThree, checkedFour);
    }

    const handleVoltarHome = () => {
        voltarHome();
    }


    return(
        <div id="leads">
            <form className="form">
                <div className="header">
                <img id = "img" src={imagem}/>
                <h1 className="title">Novo Lead</h1>
                </div>
                <div className="newlead">
                    <div className="campos">
                        <div className="field">
                            <label htmlFor="nome">Nome*</label>
                            <input type="nome" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                                <label htmlFor="telefone">Telefone*</label>
                                <input type="telefone" name="telefone" id="telefone" value={telefone} onChange={(e) => mascaraTel(e.target.value)}/>
                        </div>
                        <div className="field">
                                <label htmlFor="email">Email*</label>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="checklist">
                        <label htmlFor="oportunidades">Oportunidades*</label>
                        <div className="checkboxes">
                            <Checkbox label={" "} value={checked} onChange={handleChange}/>
                            <Checkbox label={"RPA"} value={checkedOne} onChange={handleChangeOne}/>
                            <Checkbox label={"Produto Digital"} value={checkedTwo} onChange={handleChangeTwo}/>
                            <Checkbox label={"Analytics"} value={checkedThree} onChange={handleChangeThree}/>
                            <Checkbox label={"BPM"} value={checkedFour} onChange={handleChangeFour}/>
                            <div className="button">
                                <button type="submit" onClick={handleRegisterLeads}>Salvar</button>
                            </div>
                            <div className="button">
                                <button type="voltar" onClick={handleVoltarHome}>Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
        </div>
    );
};

export default LeadsPage;