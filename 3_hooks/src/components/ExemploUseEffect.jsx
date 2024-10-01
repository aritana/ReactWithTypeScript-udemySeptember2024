import { useEffect, useState } from 'react'

const ExemploUseEffect = () => {

    const [contador, setcontador] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`
    })

    return (
        <div>
            <div>Exemplo de UseEffect</div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={()=>setcontador(contador+1)}>Clique</button>
        </div>
    )
}

export default ExemploUseEffect