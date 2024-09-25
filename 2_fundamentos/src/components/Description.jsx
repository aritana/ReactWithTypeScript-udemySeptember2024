import React from "react"

const Description = ({idade, nome})=>{
    return(        
        <div>
            Seu sobrenome é {nome}
            <br /> sua idade é {idade}
        </div>   
    )
}
export default Description