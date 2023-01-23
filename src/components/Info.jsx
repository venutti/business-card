import React from "react";
import profilePicture from "../assets/profile-picture.png";
import email from "../assets/main-icon.png";
import linkedin from "../assets/linkedin-icon.png";

export default function Info() {
  return (
    <div className="info">
      <img className="info--img" src={profilePicture} alt="profile-picture" />
      <div className="info--container">
        <h2 className="info--name">Laura Smith</h2>
        <h4 className="info--position">Frontend Developer</h4>
        <a href="#" className="info--website">
          {" "}
          laurasmith.website
        </a>
        <div className="info--buttons">
          <button type="button" className="info--email">
            <img src={email} className="info--icon_sm" />
            Email
          </button>
          <button type="button" className="info--linkedin">
            <img src={linkedin} className="info--icon_sm" />
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
}
