import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import "./BreedScreen.css";

const BreedScreen = () => {
  const [breeds, setBreeds] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://catfact.ninja/breeds?limit=10");

      setBreeds(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Link className="link-back" to="/">
        <AiOutlineArrowLeft /> &nbsp; Go Back
      </Link>

      <div className="breed-container">
        {breeds.data.map((breed, idx) => (
          <div className="card" key={idx}>
            <div className="container">
              <h4>
                <b>{breed.breed}</b>
              </h4>
              <p>{breed.country.slice(0, 20)}</p>
              <p>
                <b>Origin: </b>
                {breed.origin}
              </p>
              <p>
                <b>Coat:</b> {breed.coat}
              </p>
              <p>
                {" "}
                <b>Pattern:</b> {breed.pattern}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3>HERE PAGINATION</h3>
    </>
  );
};

export default BreedScreen;
