import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h2>
                DashBoard
            </h2>
            <nav>
                <ul>
                    <li><Link to="profile" >Perfil</Link></li>
                    <li><Link to="settings" >Configurações</Link></li>
                </ul>
            </nav>
            <h3>
                <Outlet />
            </h3>
        </div>
    )
}

export default Dashboard
