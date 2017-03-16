import React from "react";

function Button({label, onClick}) {
    return (
        <input type="button" onClick={onClick} value={label}/>
    );
}

export default Button;