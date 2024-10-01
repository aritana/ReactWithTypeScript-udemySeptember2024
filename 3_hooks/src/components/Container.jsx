import React from 'react';

function Container({ children }) {
    return <div className='container'>
        <h2>Início Container, antes dos elementos child</h2>
        <div>{children}</div>
        <p>Fim do container</p>
    </div>
}

export default Container