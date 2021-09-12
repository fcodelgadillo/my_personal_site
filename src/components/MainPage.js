import React from "react";

import Header from "./Header";
import Introduction from "./Introduction";
import WhatIDo from "./WhatIDo";
import WhoIAm from "./WhoIAm";
import ATasteOfMyWork from "./ATasteOfMyWork";
import Footer from "./Footer";


const MainPage = ({state, toggle, navBar}) => {

    return (
        <div>
            <Header toggle={toggle} navBar={navBar}/>
            <Introduction/>
            <WhatIDo/>
            <WhoIAm/>
            <ATasteOfMyWork state={state}/>
            <Footer/>
        </div>
    )
};

export default MainPage;
