import React from "react";
import "../css/style.css";
import projects from "../projectdata/projectData";

import MainPage from "./MainPage";
import BioItem from "./BioItem";
import AllProjects from "./AllProjects";

class App extends React.Component {
    state = {
        newView: "Main",
        view: "Main",
        projects: [...projects],
        currentProject: 0
    };

    toggle() {
        document.body.classList.toggle('nav-open');
    }

    navBarLinking = (newView) => {
        document.body.classList.remove('nav-open');
        this.setState({view: newView})
        window.history.pushState({newView}, null, `/${newView}`)
    }

    nextProject = (currentProject) => {
        if (currentProject < 8) this.setState({ currentProject: this.state.currentProject+1 })
    }

    prevProject = (currentProject) => {
        if(currentProject > 0) this.setState({ currentProject: this.state.currentProject-1 })
    }


    backAndForth = () => {
            window.addEventListener('popstate', event => {
                this.setState({view: event.state.newView})
            })
    }

    componentDidMount() {
        window.history.replaceState({newView: "Main"}, '', '/Main')
    }

    render() {
        this.backAndForth();
        let view = this.state.view;
        return (
                <div>
                    {view === "Main" && <MainPage
                        navBar={this.navBarLinking}
                        toggle={this.toggle}
                        state={this.state.projects}
                    />}
                    {view === "Bio" && <BioItem
                        toggle={this.toggle}
                        navBar={this.navBarLinking}
                    />}
                    {view === "Projects" && <AllProjects
                        currentProject={this.state.currentProject}
                        state={this.state.projects}
                        toggle={this.toggle}
                        navBar={this.navBarLinking}
                        nextProject={this.nextProject}
                        prevProject={this.prevProject}
                    />}
                </div>
        )
    }
}

export default App;
