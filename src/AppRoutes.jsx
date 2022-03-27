import React, {useContext} from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from "./pages/RegisterPage";
import LeadsPage from "./pages/LeadsPage";

import { AuthProvider, AuthContext } from "./contexts/auth";
import { RegisterProvider} from "./contexts/register";
import { HomeProvider } from "./contexts/home";
import { LeadsProvider } from "./contexts/leads";


const AppRoutes = () => {

    const Private = ({children}) =>{
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to="/"/>
        }

        return children;
    };

    return(
        <Router>
            <LeadsProvider>
            <HomeProvider>
            <AuthProvider>
            <Routes>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route exact path="/home" element={<Private><HomePage/></Private>}/>
                <Route exact path="/newlead" element={<Private><LeadsPage/></Private>}/>
            </Routes>
            </AuthProvider>
            </HomeProvider>
            </LeadsProvider>
            <RegisterProvider>
            <Routes>
                <Route exact path="/register" element={<RegisterPage/>}/>   
            </Routes>
            </RegisterProvider>
        </Router>
    )
}

export default AppRoutes