import React from "react";

const ATasteOfMyWork = ({state}) => {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My Work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my work</p>

            <div className="portfolio">

                <a href={state[0].urlSite} className="portfolio__item" target="_blank" rel="noopener noreferrer">
                  <img src={state[0].images[0]} className="portfolio__img" alt="JS conf webpage"/>
                </a>

                <a href= {state[2].urlSite} className="portfolio__item" target="_blank" rel="noopener noreferrer">
                    <img src={state[2].images[0]} className="portfolio__img" alt="JS conf webpage"/>
                </a>

                <a href={state[3].urlSite} className="portfolio__item" target="_blank" rel="noopener noreferrer">
                    <img src={state[3].images[0]} className="portfolio__img" alt="JS conf webpage"/>
                </a>

                <a href={state[4].urlSite} className="portfolio__item" target="_blank" rel="noopener noreferrer">
                    <img src={state[4].images[0]} className="portfolio__img" alt="JS conf webpage"/>
                </a>

                <a href={state[5].urlSite} className="portfolio__item" target="_blank" rel="noopener noreferrer">
                    <img src={state[5].images[0]} className="portfolio__img" alt="JS conf webpage"/>
                </a>

                <a href={state[8].urlSite} className="portfolio__item" target="_blank" rel="noopener noreferrer">
                    <img src={state[8].images[0]} className="portfolio__img" alt="JS conf webpage"/>
                </a>

            </div>
        </section>
    )
};

export default ATasteOfMyWork;
