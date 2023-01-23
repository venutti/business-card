import React from "react";

export default function About() {
  return (
    <div className="about--container">
      <article className="about--article">
        <h2 className="about--title">About</h2>
        <p className="about--text">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </article>
      <article className="about--article">
        <h2 className="about--title">Interests</h2>
        <p className="about--text">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </article>
    </div>
  );
}
