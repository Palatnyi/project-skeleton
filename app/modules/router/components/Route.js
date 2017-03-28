import React from "react";
import {Route as DomRoute} from "react-router-dom";

function Route(props) {
    return(
        <DomRoute {...props}/>
    );
}

export default Route;