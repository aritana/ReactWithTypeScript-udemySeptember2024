import './App.css'

import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contacts from './components/Contacts';
import Login from './components/Login';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contacts">Contato</Link></li>
          <li><Link to="/login">Login</Link></li>
          
          {/*2 - NavLink*/}

          <li>
            <NavLink
            className={({isActive})=> (isActive? "active-link":"")}
            to="/contacts">Contato</NavLink>
          </li>

          {/*3 - UseNavigate*/}
          


        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
