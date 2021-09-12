import React from "react";
import profile from "../images/perfil.jpg";

const Introduction = () => {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Francisco Delgadillo</strong>
            </h1>

            <p className="section__subtitle section__subtitle--intro">
                Full Stack Dev
            </p>

            <img src={profile} alt="Francisco Delgadillo" className="intro__img"/>
        </section>
    )
};

export default Introduction;
