import React from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

const ProjectSlider = ({state, currentProject, nextProject, prevProject}) => {

    const randomIndex = () => {
        const length = state[currentProject].images.length;
        return Math.floor(Math.random()*length);
    }

    return (
        <div>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                     Project <strong>Title</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">
                    {state[currentProject].title}
                </p>
                <img src={state[currentProject].images[0]} alt="project presentation" className="intro__img"/>
            </section>

            <div className="portfolio-item-individual">
                <FaArrowAltCircleRight onClick={()=> {nextProject(currentProject)}} className="right-arrow"/>
                <FaArrowAltCircleLeft onClick={() => {prevProject(currentProject)}} className="left-arrow"/>
                <h3>
                    Technologies: {state[currentProject].technologies}
                </h3>
                <br/>

                <a className="btn" href={state[currentProject].urlSite} target="_blank" rel="noopener noreferrer">Project Site</a>

                <br/>
                <br/>

                <img src={state[currentProject].images[randomIndex()]} alt="project presentation"/>
                    <p>
                        {state[currentProject].brief}
                    </p>
                    <p>
                        {state[currentProject].description}
                    </p>
            </div>
        </div>
    )
};

export default ProjectSlider;
