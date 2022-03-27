import React, { useContext, useState } from "react";

import './styles.css';

import { AuthContext } from "../../contexts/auth";

import { HomeContext } from "../../contexts/home";

import  Table  from "../../components/Table";

const HomePage = () => {

    const { logout } = useContext(AuthContext);
    const { newleads } = useContext(HomeContext);

    var table = [{
        cliente: "",
        dados: "",
        reuniao:""
    }]
    const tableleads = localStorage.getItem('tableleads');
    if (tableleads){
        table = JSON.parse(tableleads);
    }


    const [lead, setLead] = useState(table);

    const handleLogout = () => {
        logout();
    };

    const handleLeads = () => {
        newleads();
    };

    const head = {
        cliente: 'Cliente em Potencial',
        dados: 'Dados Confirmados',
        reuniao: 'Reunião Agendada'
    }

    return( 
    <div id="main">
        <div className="navbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="252" height="65" viewBox="0 0 252 65" fill="none"><rect width="220" height="65" fill="#272727"></rect><g clip-path="url(#clip0)"><path d="M24.9878 34.9633H20V39.9511H24.9878V34.9633Z" fill="#F9F9F9"></path><path d="M32.4699 44.9389C35.2572 44.9389 37.4577 42.7384 37.4577 39.9511H24.9883V44.9389H32.4699Z" fill="#F9F9F9"></path><path d="M29.9761 29.9756C27.1888 29.9756 24.9883 32.176 24.9883 34.9633H44.9394C47.7267 34.9633 49.9272 32.7628 49.9272 29.9756H44.9394H29.9761Z" fill="#F9F9F9"></path><path d="M42.4448 20C39.6575 20 37.457 22.2005 37.457 24.9878H49.9265V20H42.4448Z" fill="#F9F9F9"></path><path d="M54.9136 24.9878H49.9258V29.9755H54.9136V24.9878Z" fill="#F9F9F9"></path><path d="M74.8652 38.044V26.8949H86.7479V29.3888H77.9459V31.1491H85.2809V33.643H77.9459V35.5501H86.7479V38.044H74.8652Z" fill="#F9F9F9"></path><path d="M74.8652 38.044V26.8949H86.7479V29.3888H77.9459V31.1491H85.2809V33.643H77.9459V35.5501H86.7479V38.044H74.8652Z" fill="#F9F9F9"></path><path d="M90.2695 38.044V26.8949H93.3502V35.4034H100.685V38.044H90.2695Z" fill="#F9F9F9"></path><path d="M90.2695 38.044V26.8949H93.3502V35.4034H100.685V38.044H90.2695Z" fill="#F9F9F9"></path><path d="M104.938 36.7237C103.618 35.6968 103.031 34.2298 103.031 32.4694C103.031 30.7091 103.618 29.2421 104.938 28.2152C106.259 27.1883 108.019 26.6015 110.22 26.6015C112.42 26.6015 114.18 27.1883 115.501 28.2152C116.821 29.2421 117.408 30.7091 117.408 32.4694C117.408 34.2298 116.821 35.6968 115.501 36.7237C114.18 37.7506 112.42 38.3374 110.22 38.3374C108.019 38.3374 106.259 37.7506 104.938 36.7237ZM113.153 34.9633C113.887 34.3765 114.18 33.4963 114.18 32.4694C114.18 31.4425 113.887 30.7091 113.153 30.1223C112.42 29.5355 111.393 29.2421 110.22 29.2421C109.046 29.2421 108.019 29.5355 107.286 30.1223C106.552 30.7091 106.259 31.5892 106.259 32.4694C106.259 33.3496 106.552 34.2298 107.286 34.9633C108.019 35.5501 109.046 35.8435 110.22 35.8435C111.393 35.8435 112.42 35.5501 113.153 34.9633Z" fill="#F9F9F9"></path><path d="M104.938 36.7237C103.618 35.6968 103.031 34.2298 103.031 32.4694C103.031 30.7091 103.618 29.2421 104.938 28.2152C106.259 27.1883 108.019 26.6015 110.22 26.6015C112.42 26.6015 114.18 27.1883 115.501 28.2152C116.821 29.2421 117.408 30.7091 117.408 32.4694C117.408 34.2298 116.821 35.6968 115.501 36.7237C114.18 37.7506 112.42 38.3374 110.22 38.3374C108.019 38.3374 106.259 37.7506 104.938 36.7237ZM113.153 34.9633C113.887 34.3765 114.18 33.4963 114.18 32.4694C114.18 31.4425 113.887 30.7091 113.153 30.1223C112.42 29.5355 111.393 29.2421 110.22 29.2421C109.046 29.2421 108.019 29.5355 107.286 30.1223C106.552 30.7091 106.259 31.5892 106.259 32.4694C106.259 33.3496 106.552 34.2298 107.286 34.9633C108.019 35.5501 109.046 35.8435 110.22 35.8435C111.393 35.8435 112.42 35.5501 113.153 34.9633Z" fill="#F9F9F9"></path><path d="M121.956 36.7237C120.782 35.6968 120.195 34.2298 120.195 32.4694C120.195 30.7091 120.782 29.2421 122.102 28.2152C123.423 27.1883 125.183 26.6015 127.237 26.6015C130.024 26.6015 132.225 27.6284 133.398 29.3888L131.198 30.8557C130.171 29.6822 128.851 28.9487 127.237 28.9487C126.063 28.9487 125.036 29.2421 124.303 29.8289C123.569 30.4157 123.276 31.2958 123.276 32.176C123.276 34.2298 124.743 35.5501 127.237 35.5501C128.557 35.5501 130.024 34.9633 130.904 33.9364H127.677V31.8826H133.985V38.044H131.491V36.577C130.464 37.7506 128.997 38.3374 126.943 38.3374C124.89 38.3374 123.129 37.7506 121.956 36.7237Z" fill="#F9F9F9"></path><path d="M121.956 36.7237C120.782 35.6968 120.195 34.2298 120.195 32.4694C120.195 30.7091 120.782 29.2421 122.102 28.2152C123.423 27.1883 125.183 26.6015 127.237 26.6015C130.024 26.6015 132.225 27.6284 133.398 29.3888L131.198 30.8557C130.171 29.6822 128.851 28.9487 127.237 28.9487C126.063 28.9487 125.036 29.2421 124.303 29.8289C123.569 30.4157 123.276 31.2958 123.276 32.176C123.276 34.2298 124.743 35.5501 127.237 35.5501C128.557 35.5501 130.024 34.9633 130.904 33.9364H127.677V31.8826H133.985V38.044H131.491V36.577C130.464 37.7506 128.997 38.3374 126.943 38.3374C124.89 38.3374 123.129 37.7506 121.956 36.7237Z" fill="#F9F9F9"></path><path d="M137.506 38.044V26.8949H146.308C147.481 26.8949 148.508 27.1883 149.242 27.9218C149.975 28.6553 150.415 29.5355 150.415 30.5623C150.415 31.5892 150.122 32.4694 149.242 33.0562C148.508 33.643 147.628 34.0831 146.455 34.0831L150.709 38.044H146.455L142.64 34.0831H140.44V38.044H137.506ZM140.587 29.3888V31.7359H145.574C146.601 31.7359 147.188 31.2958 147.188 30.5623C147.188 29.8289 146.601 29.3888 145.574 29.3888H140.587Z" fill="#F9F9F9"></path><path d="M137.506 38.044V26.8949H146.308C147.481 26.8949 148.508 27.1883 149.242 27.9218C149.975 28.6553 150.415 29.5355 150.415 30.5623C150.415 31.5892 150.122 32.4694 149.242 33.0562C148.508 33.643 147.628 34.0831 146.455 34.0831L150.709 38.044H146.455L142.64 34.0831H140.44V38.044H137.506ZM140.587 29.3888V31.7359H145.574C146.601 31.7359 147.188 31.2958 147.188 30.5623C147.188 29.8289 146.601 29.3888 145.574 29.3888H140.587Z" fill="#F9F9F9"></path><path d="M154.964 36.7237C153.643 35.6968 153.057 34.2298 153.057 32.4694C153.057 30.7091 153.643 29.2421 154.964 28.2152C156.284 27.1883 158.044 26.6015 160.245 26.6015C162.445 26.6015 164.206 27.1883 165.526 28.2152C166.846 29.2421 167.433 30.7091 167.433 32.4694C167.433 34.2298 166.846 35.6968 165.526 36.7237C164.206 37.7506 162.445 38.3374 160.245 38.3374C158.044 38.3374 156.284 37.7506 154.964 36.7237ZM163.179 34.9633C163.912 34.3765 164.206 33.4963 164.206 32.4694C164.206 31.4425 163.912 30.7091 163.179 30.1223C162.445 29.5355 161.418 29.2421 160.245 29.2421C159.071 29.2421 158.044 29.5355 157.311 30.1223C156.577 30.7091 156.284 31.5892 156.284 32.4694C156.284 33.3496 156.577 34.2298 157.311 34.9633C158.044 35.5501 159.071 35.8435 160.245 35.8435C161.418 35.8435 162.445 35.5501 163.179 34.9633Z" fill="#F9F9F9"></path><path d="M154.964 36.7237C153.643 35.6968 153.057 34.2298 153.057 32.4694C153.057 30.7091 153.643 29.2421 154.964 28.2152C156.284 27.1883 158.044 26.6015 160.245 26.6015C162.445 26.6015 164.206 27.1883 165.526 28.2152C166.846 29.2421 167.433 30.7091 167.433 32.4694C167.433 34.2298 166.846 35.6968 165.526 36.7237C164.206 37.7506 162.445 38.3374 160.245 38.3374C158.044 38.3374 156.284 37.7506 154.964 36.7237ZM163.179 34.9633C163.912 34.3765 164.206 33.4963 164.206 32.4694C164.206 31.4425 163.912 30.7091 163.179 30.1223C162.445 29.5355 161.418 29.2421 160.245 29.2421C159.071 29.2421 158.044 29.5355 157.311 30.1223C156.577 30.7091 156.284 31.5892 156.284 32.4694C156.284 33.3496 156.577 34.2298 157.311 34.9633C158.044 35.5501 159.071 35.8435 160.245 35.8435C161.418 35.8435 162.445 35.5501 163.179 34.9633Z" fill="#F9F9F9"></path><path d="M183.423 26.8949V33.2029C183.423 36.577 181.223 38.3374 176.968 38.3374C172.714 38.3374 170.514 36.577 170.514 33.2029V26.8949H173.594V32.9095C173.594 34.8166 174.768 35.8435 176.968 35.8435C179.169 35.8435 180.343 34.8166 180.343 32.9095V26.8949H183.423Z" fill="#F9F9F9"></path><path d="M183.423 26.8949V33.2029C183.423 36.577 181.223 38.3374 176.968 38.3374C172.714 38.3374 170.514 36.577 170.514 33.2029V26.8949H173.594V32.9095C173.594 34.8166 174.768 35.8435 176.968 35.8435C179.169 35.8435 180.343 34.8166 180.343 32.9095V26.8949H183.423Z" fill="#F9F9F9"></path><path d="M190.171 34.8166V38.044H187.09V26.8949H195.452C198.239 26.8949 199.999 28.3619 199.999 30.8557C199.999 32.0293 199.559 33.0562 198.826 33.7897C198.092 34.5232 196.919 34.8166 195.598 34.8166H190.171ZM190.171 29.3888V32.3227H194.865C196.185 32.3227 196.772 31.7359 196.772 30.8557C196.772 29.9756 196.038 29.3888 194.865 29.3888H190.171Z" fill="#F9F9F9"></path><path d="M190.171 34.8166V38.044H187.09V26.8949H195.452C198.239 26.8949 199.999 28.3619 199.999 30.8557C199.999 32.0293 199.559 33.0562 198.826 33.7897C198.092 34.5232 196.919 34.8166 195.598 34.8166H190.171ZM190.171 29.3888V32.3227H194.865C196.185 32.3227 196.772 31.7359 196.772 30.8557C196.772 29.9756 196.038 29.3888 194.865 29.3888H190.171Z" fill="#F9F9F9"></path></g><rect x="220" width="32" height="65" fill="#272727"></rect><defs><clipPath id="clip0"><rect width="180" height="25" fill="white" transform="translate(20 20)"></rect></clipPath></defs></svg>
            <div className="action">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
        <div className="panel">
            <h1>Painel de Leads</h1>
            <div className="newlead">
                <button onClick={handleLeads}>Novo Lead (+)</button>
            </div>
            <div className="Table">
                <Table leads = {lead} head = {head}/>
            </div>
        </div>
    </div>)
};

export default HomePage;