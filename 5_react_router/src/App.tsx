import './App.css'

import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contacts from './components/Contacts';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import TaskDetails from './components/TaskDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contacts">Contato</Link></li>


          {/*2 - NavLink*/}

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contacts">Contato</NavLink>
          </li>

          {/*3 - UseNavigate*/}
          <li><Link to="/login">Login</Link></li>

          {/*4 - Rotas aninhadas*/}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/*4 - Rotas dinâmicas*/}
      <div>
        <h2>Tarefas</h2>
        <Link to="/task/1">Tarefa 1</Link>
        <br />
        <Link to="/task/2">Tarefa 2</Link>
        <br />
        <Link to="/task/3">Tarefa 3</Link>
      </div>

      {/*6 - Rotas 404*/}
      <div>
        <h2>Itens</h2>
        <Link to="/itens/1">Item 1</Link>
      </div>

      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />

        {/*4 - Rotas aninhadas*/}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/*4 - Rotas dinâmicas*/}
        <Route path="/task/:taskId" element={<TaskDetails />} />

        {/*6 - Rotas 404*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
