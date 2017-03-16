import React from "react";
import "./TableBar.less";

function TableBar({children}) {
    return (
        <div className="tableBar">
            {children}
        </div>
    );
}

export default TableBar;