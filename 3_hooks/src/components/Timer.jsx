import React, { useEffect, useState } from 'react'

function Timer() {
    const [segundos, setSegundos] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1)
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])//array de dependencias vazio. Reenderiza quando a página iniciar.

    return (
        < div >
            Timer:{segundos} segundos.
        </div >
    )
}

export default Timer