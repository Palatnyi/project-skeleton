import React from "react";

function Field({value, name, onChange}) {
    return (
        <input type="text" onChange={(event) => {onChange(event.target.value)}}/>
    );
}

export default Field;