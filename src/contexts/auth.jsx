import React, { useState, useEffect , createContext } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const recoveredUsers = localStorage.getItem('users');
        if (recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        if (recoveredUsers){
            setList(JSON.parse(recoveredUsers));
        }

        setLoading(false);
    }, []);

    const logged = (login, password) => {
        console.log("login", { login, password });

        const loggeduser = {
            login,
            password
        }
        if (list){
            for (var i = 0; i < list.length; i++){
                if (list[i].login === login && list[i].password === password){
                    localStorage.setItem("user", JSON.stringify(loggeduser));
                    setUser({loggeduser});
                    navigate("/home")
                    return;
                }
                if (i === list.length - 1){
                    alert("Usuário ou Senha incorretos!");
                }
            }
        }
    }
        


    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/")
    };

    const register = () => {
        navigate("/register")
    };


    return (
        <AuthContext.Provider value = {{authenticated: Boolean(user), user, loading, logged, logout, register}}>
            {children}
        </AuthContext.Provider>
    );
};