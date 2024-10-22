import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar para home </Link>
    </div>
  )
}

export default NotFound
