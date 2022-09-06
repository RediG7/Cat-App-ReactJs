import React, { useState, useEffect } from "react";
import { TagCloud } from "react-tagcloud";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./FactsScreen.css";

const FactsScreen = () => {
  const [facts, setFacts] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://catfact.ninja/facts?limit=10");

      setFacts(result.data);
    };

    fetchData();
  }, []);

  //   console.log(facts.data);

  let newArr = facts.data.map((item) => {
    return {
      value: item.fact,
      count: Math.floor(Math.random() * (40 - 15 + 1) + 15),
    };
  });

  return (
    <>
      <Link className="link-back" to="/">
        <AiOutlineArrowLeft /> &nbsp; Go Back
      </Link>
      <TagCloud
        className="tag-style"
        minSize={15}
        maxSize={40}
        tags={newArr}
        onClick={(tag) => alert(`'${tag.value}' was selected!`)}
      />
      <h3>HERE PAGINATION</h3>
    </>
  );
};

export default FactsScreen;
