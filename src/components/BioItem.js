import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import image from "../images/perfilmirror.jpg"

const BioItem = ({toggle, navBar}) => {
    return (
        < >
            <Header toggle={toggle} navBar={navBar}/>
            <section className="about-me" id="about">
                <h2 className="section__title section__title--about">About Me</h2>
                <p className="section__subtitle section__subtitle--about">Fullstack Dev & Chem. Eng.</p>

                <div className="about-me__body">
                    <p>
                        As you already know, I am an engineer. I consider myself a multidisciplinary professional (human, by the way) who loves science, knowledge and sports.
                        I believe that perfection does not exist as a place, is an illusion, most of all a distraction, but in reality it is an infinite path you can follow.
                        You have to think about improving yourself all the time. You have to admit that there is always something new to learn or something old to update.
                    </p>
                    <p>
                        I have been teaching all these disciplines I like, going from simple mathematical equations to complex functions. Going from basic HTML to JS,
                        walking around through physics and never running from chemistry. In all this years I have learned to love the hard process of learning. And side by side
                        of my hundreds of students I have built a nice career.
                    </p>
                    <p>
                        I have managed and recruited ten or more people in education field. I have evaluated and trained professors. I have been in charge of
                        successful marketing campaigns. I have also designed and edited digital material for a wide variety of classes. But in the last couple of years
                        my hunger of creation and the lack of new intellectual challenges has led me to commit myself only to software development, and here is
                        where I have found fertility.
                    </p>
                    <p>
                        The articles about AI, language processing, image processing, cloud computing, autonomous cars, web design, cyber security...
                        they are just amazing, they are so promising. It is like a great conjunction of art and engineering. Software is the modern tool
                        to craft statues and cathedrals.
                    </p>
                    <p>
                        My new goal, after all the things I have done, is to continue building a path in software development. Not just for the sake of it, but for the
                        passion I have to solve problems. Why not? Tomorrow, with hard work and discipline, I could be a great software architect.
                    </p>
                    <p>
                        I cannot see the future, but I can tell you this: you won't regret working with me. So, if you have a shot for me, let's do it!
                    </p>
                </div>

                <img src={image} alt="Frank standing in front of a mirror" className="about-me__img"/>
            </section>
            <Footer/>
        < />
    )
};

export default BioItem;
