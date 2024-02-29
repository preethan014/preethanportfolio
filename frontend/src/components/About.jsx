import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="a-outer" id="about">
      <div className="a-inner">
        <div className="a-options">
          <div className="a-opt-inner">
            <div className="a-i-opt">
              <span>Skills</span>
            </div>
          </div>
        </div>
        <div className="a-results">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
