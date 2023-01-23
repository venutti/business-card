import React from "react";
import twitter from "../assets/twitter-icon.png";
import facebook from "../assets/facebook-icon.png";
import instagram from "../assets/instagram-icon.png";
import github from "../assets/github-icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer--links">
        <li>
          <img src={twitter} className="footer--icon" />
        </li>
        <li>
          <img src={facebook} className="footer--icon" />
        </li>
        <li>
          <img src={instagram} className="footer--icon" />
        </li>
        <li>
          <img src={github} className="footer--icon" />
        </li>
      </ul>
    </footer>
  );
}
