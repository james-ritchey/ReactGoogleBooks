import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return(
        <div className="nav">
            <h3>Google Books</h3>
            <Link to={"/search"}>
                <p className="nav-link">Search</p>
            </Link>
            <Link to={"/saved"}>
                <p className="nav-link">Saved</p>
            </Link>
        </div>
    );
}

export default Nav;