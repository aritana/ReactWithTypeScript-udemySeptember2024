import React from "react";

const RenderConditional = ({user})=>{
    return(
        <div>            
            {user && <h4>Bem vindo de volta {user}!</h4>}
        </div>
    )
}

export default RenderConditional;