import { useState, useEffect } from "react";

export default function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        //Função que altera os valores
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        //evento que dispara a função
        window.addEventListener('resize', handleResize);
        handleResize(); //ter o valor inicial

        return ()=> window.removeEventListener
    }, []);

    return windowSize;
}