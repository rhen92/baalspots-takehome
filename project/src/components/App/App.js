import React from "react";
import arrow from "../../assets/Arrow.svg";
import bar from "../../assets/active-bar.jpg";
import card from "../../assets/credit-card.jpg";
import hamburger from "../../assets/hamburger-icon.svg"
import hand from "../../assets/hand-card.jpg";
import pinwheels from "../../assets/pinwheels.svg";
import stars from "../../assets/cardo-stars.svg";
import twinkle from "../../assets/stars.svg";
import vector from "../../assets/vector.svg";
import "./App.css";
import Features from "../Features/Features";
import { getLCP, getFID, getCLS } from "web-vitals";

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

const App = () => {
  return (
    <>
    <header>
      <div className="title-styling">
        <img className="cardo-stars" src={stars} alt="stars"/>
        <h1 className="title">Cardo</h1>
        <img className="hamburger-menu" src={hamburger} alt="hamburger-icon"/>
        <nav className="nav-elements">
          <button>Deposit</button>
          <button>Dashboard</button>
          <button>Company</button>
          <button>Pricing</button>
        </nav>
      </div>
    </header>
    <main>
        <img className="main-image" src={hand} alt="Hand behind credit card"/>
        <img className="pinwheels" src={pinwheels} alt="3 pinwheels" />
        <img className="stars" src={twinkle} alt="two stars" />
        <div className="span-styling">
          <span className="normal-font">All the </span><span className="bold-font">experience </span><span className="normal-font">in the new credit card</span>
        </div>
        <img className="arrow" src={arrow} alt="arrow"/>
        <p className="paragraph-styling">Simple transfers, payments for utilities, functional statemement, card settings, for which you used to have to go too the brach oonline-banking</p>
        <button className="order-button">Order a card</button>
        <button className="works-button">How it works <img className= "bracket" src={vector} alt="angle bracket" /></button>
        <img className="status-bar" src={bar} alt="stats on users" />
        <img className="credit-card" src={card} alt="credit card" />
        <Features />
    </main>
    </>
  );
}

export default App;
