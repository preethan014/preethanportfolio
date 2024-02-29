import React from "react";
import { IoLogoGithub } from "react-icons/io";
const Project = (props) => {
  const image = props.each.image;
  const title = props.each.title;
  const about = props.each.about;
  const github = props.each.github;
  const technologies=props.each.technologies;

  
  return (
    <div className="pr-outer">
      <div className="pr-img-sl-outer">
        <video width="100%" controls=""  muted  autoPlay loop disablePictureInPicture>
          <source src={image} type="video/mp4" />
        </video>
      </div>
      <div className="pr-des-outer">
        <h1>{title}</h1>
        <h4 className="pr-a-t"><b>About: </b>{about}</h4>
        <h4 className="pr-a-t">Technologies Used: {technologies}</h4>
         <div className="pr-t-u">
          <a href={github} target="_blank"> <IoLogoGithub className="pr-t-u-i" size={45} /></a>
          Source Code
        </div>
      </div>
    </div>
  );
};

export default Project;
