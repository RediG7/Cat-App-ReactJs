import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import Pagination from "react-js-pagination";
import "./BreedScreen.css";

const BreedScreen = () => {
  const [breeds, setBreeds] = useState({ data: [] });
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://catfact.ninja/breeds?limit=10&page=${activePage}`
      );

      setBreeds(result.data);
    };

    fetchData();
  }, [activePage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

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
      <Pagination
        activePage={breeds.current_page}
        itemsCountPerPage={Number(breeds.per_page)}
        totalItemsCount={breeds.total}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        linkClassPrev={breeds.prev_page_url}
        linkClassNext={breeds.next_page_url}
        linkClassLast={breeds.last_page_url}
        innerClass={"ul_tag"}
        activeClass={"active_li"}
        activeLinkClass={"active_a"}
        itemClass={"li_tag"}
      />
    </>
  );
};

export default BreedScreen;
