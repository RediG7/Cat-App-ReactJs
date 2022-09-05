import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import "./RandomScreen.css";

const RandomScreen = () => {
  const [fact, setFact] = useState({ data: {} });

  const fetchData = async () => {
    const result = await axios("https://catfact.ninja/fact?max_length=140");
    setFact(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <Link className="link-back" to="/">
        <AiOutlineArrowLeft /> &nbsp; Go Back
      </Link>

      <div className="random-fact-container">
        <p className="get-fact">Get Random Cat Fact</p>
        <div id="fact" className="fact">
          {fact.data.fact}
        </div>
        <button id="randomBtn" className="btn" onClick={handleClick}>
          Get Another Random Fact
        </button>
      </div>
    </>
  );
};

export default RandomScreen;
