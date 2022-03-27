import React, { createContext } from "react";

import { useNavigate } from "react-router-dom";

export const HomeContext = createContext();

export const HomeProvider = ({children}) =>{

    const navigate = useNavigate();

    const newleads = () => {
        navigate("/newlead");
    };

    return (
        <HomeContext.Provider value = {{newleads}}>
        {children}
        </HomeContext.Provider>
    );

};