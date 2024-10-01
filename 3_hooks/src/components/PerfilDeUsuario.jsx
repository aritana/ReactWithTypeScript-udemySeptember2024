import { useState, useEffect } from 'react'


function PerfilDeUsuario({ usuarioId }) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        const buscarUsuarios = async () => {
            // Aqui usamos o 'await' para esperar a resposta da API
            const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`);

            // Após a resposta ser recebida, convertemos ela para JSON
            const dadosUsuarios = await resposta.json();

            // Exibimos os dados no console
            console.log(dadosUsuarios);

            setUsuario(dadosUsuarios);
        };
        if (usuarioId) {
            buscarUsuarios();
        }

    }, [usuarioId]);

    return (
        <div>
            {usuario ? (
                <div>
                 <h3>{usuario.name}</h3>
                 <h3>{usuario.email}</h3>
                </div>                
            ) :
                (<p>Carregando perfil do usuário...{usuarioId}</p>)}
        </div>
    )
}

export default PerfilDeUsuario;