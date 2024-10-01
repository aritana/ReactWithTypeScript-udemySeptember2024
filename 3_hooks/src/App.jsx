import { useState } from 'react'
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContext'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUsuario from './components/PerfilDeUsuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* useEffect */}
      <ExemploUseEffect />
      <hr />
      <Timer />
      {/* useContext: aplicações de pequeno médio porte, que precisam transeferir
      o estado enttre os componentes.*/}

      <hr />
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>

      {/* useReducer: estados mais complexos que os utilizados anteriormente.*/}
      <hr />
      <Contador />

      {/* custom hook - monitorar o tamanho da Janela*/}
      <hr />
      <DisplayWindowSize />
      {/* Slots e children props*/}

      <hr />
      <Container> 
        <h1>Título da Seção</h1>
        <p>Este é o meu subtítulo</p>
      </Container>

      {/*Sincronizar o estado com props*/}

      <hr />
      <PerfilDeUsuario usuarioId={1}/>

      <hr />
    </>
  )
}

export default App
