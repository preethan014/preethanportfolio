import React from "react";
import css from "../images/css.png";
import html from "../images/html.png";
import c from "../images/c.png";
import java from "../images/java.png";
import javascript from "../images/javascript.png";
import mongodb from "../images/mongodb.png";
import mysql from "../images/mysql.png";
import nodejs from "../images/node-js.png";
import react from "../images/react.png";

const Skills = () => {
  return (
    <div className="skills-outer">
       <div className="s-c-i-outer">
        <img className="s-c-i" src={c} />
      </div>
      
      <div className="s-c-i-outer">
        <img className="s-c-i" src={html} />
      </div>
      <div className="s-c-i-outer">
        <img className="s-c-i" src={css} />
      </div>
      <div className="s-c-i-outer">
        <img className="s-c-i" src={java} />
      </div>
      <div className="s-c-i-outer">
        <img className="s-c-i" src={mysql} />
      </div>
     
      <div className="s-c-i-outer">
        <img className="s-c-i" src={javascript} />
      </div>
     
      <div className="s-c-i-outer">
        <img className="s-c-i" src={react} />
      </div>
      <div className="s-c-i-outer">
        <img className="s-c-i" src={nodejs} />
      </div>
      <div className="s-c-i-outer">
        <img className="s-c-i" src={mongodb} />
      </div>
     
    </div>
  );
};

export default Skills;
