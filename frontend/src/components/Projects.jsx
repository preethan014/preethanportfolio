import React from 'react'
import Project from './Project'
import p1 from "../images/p-1.mp4"
import p2 from "../images/p-2.mp4"

const Projects = (ref) => {
  const projectdes=[
    {image:p1,
    title:"HabitHub",
    about:"Habithub is your all-in-one solution for managing tasks, staying organized.",
    technologies:"reactjs nodejs mongodb Expressjs Redux",
    github:"https://github.com/preethan014/HabitHub"

    }, {image:p2,
    title:"Kiddie Corner",
    about:"Kiddie Corner is a comprehensive toy store website developed using React.js, encompassing frontend development task.",
    technologies:"reactjs css",
    github:"https://github.com/preethan014/ToyStore"

    }
  ]
  return (
    <div className='prs-outer' id="projects">
      
      <div className='prs-inner'>
      <div className='prs-title'>Projects</div>
      {projectdes.map((each)=>{
        return <Project each={each}/>
      })}
        
      </div>
        

      
    </div>
  )
}

export default Projects;
