import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FetchPost from './components/FetchPost'
import AxiosPost from './components/AxiosPost'
import PostForm from './components/PostForm'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/*1 - Get con Fetch e Axios */}
        <h1> Get com Fetch e Axios</h1>

        <div>
          <Link to="/fetch-posts">Fetch Posts</Link>
          < br />
          <Link to="/axios-posts">Axios Posts</Link>
        </div>

        {/*2 - Continuando Requisições - POST e UPDATE/PUT */}
        <div>
          <Link to="/posts">Gerenciar posts</Link>
        </div>
        {/*3 - Tratamento de erros*/}
        <div>
          <Link to="/post/1">Carregar Post 1</Link>
        </div>
        <div>
          <Link to="/post/999">Carregar Post 999</Link>
        </div>

        <Routes>
          <Route path="/fetch-posts" element={<FetchPost />} />
          <Route path="/axios-posts" element={<AxiosPost />} />
          {/*2 - Continuando Requisições - POST e UPDATE/PUT */}
          <Route path='/posts' element={<PostManager />} />
          {/*3 - Tratamento de erros */}
          <Route path='/post/:postId' element={<PostLoader />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
