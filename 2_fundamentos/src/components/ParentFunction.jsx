import React from "react";
import ChildFunction from "./ChildFunction";

const ParentFunction = () => {

    const handleChildClick = () => {
        console.log("clicou no botão do elemento filho")
    }

    return (
        <div>
            <ChildFunction onChildClick={handleChildClick} />
        </div>
    )
}

export default ParentFunction;