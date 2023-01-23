import React from "react";
import Info from "./Info";
import About from "./About";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="card">
      <Info />
      <About />
      <Footer />
    </div>
  );
}
