import React from "react"

const Button = () => {
    const handleClick = ()=>{
        console.log("logou");
    };

    return (
        <button onClick={handleClick}>Clique em mim</button>
    );
};

export default Button