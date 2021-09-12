import React from "react";

const Hamburger = ({toggle}) => {
    return (
        <button onClick={() => {toggle()}} className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"/>
        </button>
    )
};

export default Hamburger;
