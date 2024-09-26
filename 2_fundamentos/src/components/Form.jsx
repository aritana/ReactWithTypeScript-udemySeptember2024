import React, { useState } from "react";

const Form = () => {

    const [value, setValue] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="entre seu nome"
                    value={value} 
                    onChange={(e)=>{setValue(e.target.value)}}
                    />
                <button type="submit">Enviar</button>              
            </form>
        </div>
    )
}

export default Form