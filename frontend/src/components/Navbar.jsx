import React, { useState } from "react";
import { Link } from "react-scroll";
import axios from "axios";
import approved from "../images/approved.png"
const Navbar = () => {
  const [email,setEmail]=useState("");
  const [emailStatus,setEmailStatus]=useState(true);

  const [resume,setResume]=useState(false);
  function handleResume(){
    setResume(!resume);
  }
  async function handleResumeS(e){
    e.preventDefault();
    await axios.post(`${window.location.origin}/api/sendResume`,{email})
    .then((res)=>{
      if(res.status===200){
        setEmail("");
        setEmailStatus(!emailStatus);

      }
    }).catch((err)=>{
      console.log("error :",err);
    })
    

  }
  return (
    <div className="navbar">
     <div className="navbar-outer">
    <nav className="navbar-inner">
      <div className="btn-outer">
        <button class="button-89" role="button">
          Hire Me
        </button>
      </div>
      <div className="navbar-links-outer">
        <div className="navbar-links-inner">
          <div><Link to="about" smooth={true} offset={-60} duration={700}>Skills</Link></div>
          <div><Link to="projects" smooth={true} offset={-60} duration={700}>Projects</Link></div>
          <div><Link to="contact" smooth={true} offset={-60} duration={700}>Contact</Link></div>
        </div>
      </div>
      <div className="navbar-dwn-outer">
        <button onClick={handleResume} class="button-89" role="button">
          Resume
        </button>
      </div>
    </nav>
  </div>
  {resume &&  <div className="r-outer"><form onSubmit={handleResumeS} className="f-outer"><div className="input-container ic">
    <input id="email" className="input ipt" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=" "  required/>
    <div className="cut"></div>
    <label for="email" className="placeholder">Resume will be sent to this email</label>
    {emailStatus?<button class="button-92" type="submit" role="button">Submit</button>:<div style={{display:"flex",padding:"10",justifyContent:"center",alignItems:"center"}}>
      <img style={{height:"60px",width:"60px",objectFit:"fill"}} src={approved}/></div>}


  </div></form></div>}
  </div>
  )
};

export default Navbar;
