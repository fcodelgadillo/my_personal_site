import React from "react";
import mirrorImage from "../images/perfilmirror.jpg"

const WhoIAm = () => {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Full Stack Dev & Chem. Eng.</p>

            <div className="about-me__body">
                <p>
                    Hello! I’m Frank. I consider myself a hardworking engineer with some experience in a wide range of disciplines,
                    going from coding and math to chemistry. But what it is most important, I love learning and doing all the time.
                    I believe that skills can be taught, but passion is different, you have it or you don´t.
                    I love working with JS, HTML, CSS, React and Node (Feel free to check my projects).
                </p>
                <p>
                    I have worked in education field as professor, director, advisor, and developer.
                    Right now, I’m all in into software development.
                </p>
            </div>

            <img src={mirrorImage} alt="Frank standing in front of a mirror" className="about-me__img"/>
        </section>
    )
};

export default WhoIAm;
