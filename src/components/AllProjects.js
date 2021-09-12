import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectSlider from "./ProjectSlider";

const AllProjects = ({toggle, navBar, state, currentProject, nextProject, prevProject}) => {
    return (
        <>
            <Header toggle={toggle} navBar={navBar}/>
            <ProjectSlider state={state} currentProject={currentProject} nextProject={nextProject} prevProject={prevProject}/>
            <Footer/>
        </>
    )
};

export default AllProjects;
