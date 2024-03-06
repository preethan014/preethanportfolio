import React from "react";
import "animate.css";
import hello from "../images/hello.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const FirstPage = () => {
  
  return (
    <div className="fp-outer">
      <div className="fp-inner">
        <div className="fp-left">
          <div className="fp-s-outer">
            <span className="fp-s-1">
              HI THERE,
              <img className="hello-img" src={hello} /> I'M
            </span>
            <br />
            <span className="fp-s-2">Preethan</span>
            <p className="fp-p-1">
            Focus Learn Grow Enjoy Repeat
          </p>
          
          </div>
          <div className="fp-icons">
          <a href="https://github.com/preethan014" target="_blank" > <FaGithub className="fp-icons-a"/></a>
          <a href="https://www.linkedin.com/in/preethanpanthati/" target="_blank"> <FaLinkedin className="fp-icons-a"/></a>
            
            <div className="btn-outer">
        <button class="button-89" role="button">
          Open To Work
        </button>
      </div>
          </div>         
        </div>
        <div className="fp-right">
          <h1>About Me</h1>
          <h3>I'm passionate about leveraging technology to solve real-world problems and eager to apply theoretical knowledge gained through coursework to practical software development challenges. I'm a student with a B.Tech. degree in Computer Science Engineering, equipped with foundational knowledge in software development principles, and eager to embark on a career in the tech industry.</h3>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
