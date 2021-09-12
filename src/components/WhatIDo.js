import React from "react";

const WhatIDo = () => {
  return (
      <section className="my-services" id="services">
          <h2 className="section__title section__title--services">
              What I do
          </h2>

          <div className="services">

              <div className="service">
                  <h3>Front-end</h3>
                  <p>
                      As front-end developer and user, I like to enjoy fresh and responsive UI’s. Whether it is for consumer
                      use or business, my main goal is to deliver fast, responsive, intuitive, and dynamic web apps using
                      latest technologies like ReactJS.
                  </p>
              </div>

              <div className="service">
                  <h3>Back-end</h3>
                  <p>
                      As a server-side developer I enjoy designing and creating the “behind-the-scenes” functionality for apps.
                      I like writing code that connects and manage properly databases, user connections, payments, API’s, etc.
                  </p>
              </div>

              <div className="service">
                  <h3>Education</h3>
                  <p>
                      As an engineer, tutor, and lifelong learner I understand the importance of preparing people for the challenges of the present and the future.
                      Combining software developing with teaching technics I deliver modern and quality education for my students.
                  </p>
              </div>
          </div>

      </section>
  )
};

export default WhatIDo;
