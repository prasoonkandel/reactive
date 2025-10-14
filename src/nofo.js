import React from "react";
import Footer from "./MP/footer";
import "./styles/nofo.css";
import ninjaImage from "./ninja.png"; // Adjust the path as per your directory structure
import NAVBAR from "./MP/navbar";
// Import the CSS file

const NotFound = () => {
  return (
    <>
      <NAVBAR />
      <div className="not-found">
        <div className="not-found-content">
          <img src={ninjaImage} className="ninja-image" alt="Cute Ninja" />

          <h1 className="title">404</h1>
          <h2 className="subtitle">Oops! Page Not Found</h2>
          <p className="description">
            Go back to your home page and try a different route. This page is
            not available. I am just a cute ninja! Just a little tip follow this{" "}
            <a href="https://github.com/prasoonkandel">github account</a> and
            have fun.
          </p>
          <a href="/" className="home-button">
            Go back to your resting spot
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
