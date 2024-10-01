import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContext'


function ComponenteFilho() {  
  const {mensagem, setMensagem} = useContext(MeuContexto)

  return (
    <div>
      <button onClick={()=>setMensagem("Nova mensagem")}>Alterar a mensagem</button>
    </div>
  )
}

export default ComponenteFilho