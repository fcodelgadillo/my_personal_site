import React from "react";
import personalLogo from "../images/personalLogo.png";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";



const Header = ({toggle, navBar}) => {
    return (

            <header>
                <div className="logo">
                    <img src={personalLogo} alt="personal logo"/>
                </div>

                <Hamburger toggle={toggle}/>

                <Navbar navBar={navBar}/>
            </header>
    )
};

export default Header;
