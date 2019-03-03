import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div className="nav">
            <h3>Google Books</h3>
            <Link to={"/search"}>
                <p>search</p>
            </Link>
            <Link to={"/saved"}>
                <p>saved</p>
            </Link>
        </div>
    );
}

export default Nav;