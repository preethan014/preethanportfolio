import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import approved from "../images/approved.png"

import { CgMail } from "react-icons/cg";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailStatus, setEmailStatus] = useState(true);
  const [message, setMessage] = useState("");

  async function handleContactForm(e) {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/sendDetails`, { email, name, message })
      .then((res) => {
        if (res.status === 200) {
          setEmail("");
          setName("");
          setMessage("");
          setEmailStatus(!emailStatus);
        }
      })
      .catch((err) => {
        console.log("error :", err);
      });
  }
  return (
    <div className="cf-outer" id="contact">
      <div className="cf-inner">
        <div className="cf-left">
          <h1>Connect with me</h1>
          <div className="cf-l-1">
            <CiLocationOn /> Hyderabad
          </div>
          <div className="cf-l-1">
            <CgMail /> panthatipreethan14@gmail.com
          </div>
        </div>
        <div className="cf-right-outer">
          <form onSubmit={handleContactForm}>
            <div className="form">
              <div className="subtitle">Contact Me</div>
              <div className="input-container ic1">
                <input
                  id="firstname"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder=" "
                  required
                />
                <div className="cut"></div>
                <label for="firstname" className="placeholder">
                  Your Full Name
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder=" "
                  required
                />
                <div className="cut"></div>
                <label for="email" className="placeholder">
                  Your Email
                </label>
              </div>
              <div className="textarea-container ic3">
                <textarea
                  id="message"
                  className="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder=" "
                  required
                />
                <div className="cut cut-short"></div>
                <label for="message" className="placeholder">
                  Your Message
                </label>
              </div>
              {emailStatus ? (
                <button type="text" className="submit">
                  submit
                </button>
              ) : (
                <div
                  style={{
                    display: "flex",
                    padding: "10",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "60px", width: "60px", objectFit: "fill" }}
                    src={approved}
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
