import React from "react";
import "./style.css";

function ListArea({children}) {
    return(
        <div className="list-area">
            {children}
        </div>
    );
}

export default ListArea;