import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import { useSelector } from 'react-redux';
import "./header.css";


function Header () {
    const location = useLocation();
    const name = useSelector(state => state.userData.name);
    return (        
      <header className="home-header">
        <h1>Meu App</h1>
        <div className="user-menu">
            <img src={"https://ui-avatars.com/api/?background=f6546a&name=" + name + "&rounded=true"}/>
            {
                location.pathname === "/profile"
                    ? <Link className="menu-button" to="/home">Home</Link> 
                    : <Link className="menu-button" to="/profile">Meu perfil</Link>
            }
        </div>
        </header>
    );
}

export default Header;