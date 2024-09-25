import React, { useState } from "react";


const UserInfoForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted with name:", name, " and E-mail:", email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="digite seu nome"
                    onChange={(e) => setName(e.target.value)}></input>
                <input type="text" value={email} placeholder="digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}></input>

                <h4>Nome: {name}</h4>
                <h4>E-mail: {email}</h4>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default UserInfoForm