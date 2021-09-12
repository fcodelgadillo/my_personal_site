import React from "react";

const Navbar = ({navBar}) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <div onClick={() => {navBar("Main")}} className="cursor__pointer">
                    <li className="nav__item">
                        <div className="nav__link">Home</div>
                    </li>
                </div>

                <div onClick={() => {navBar("Bio")}} className="cursor__pointer">
                    <li className="nav__item">
                        <div className="nav__link">About Me</div>
                    </li>
                </div>

                <div onClick={() => {navBar("Projects")}} className="cursor__pointer">
                    <li className="nav__item">
                        <div className="nav__link">Projects</div>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;
