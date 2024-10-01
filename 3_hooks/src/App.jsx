import { useState } from 'react'
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContext'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'

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
      

    </>
  )
}

export default App
