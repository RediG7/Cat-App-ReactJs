import React, { useState, useEffect } from "react";
import { TagCloud } from "react-tagcloud";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Pagination from "react-js-pagination";
import "./FactsScreen.css";

const FactsScreen = () => {
  const [facts, setFacts] = useState({ data: [] });
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://catfact.ninja/facts?limit=10&max_legth=50&page=${activePage}`
      );

      setFacts(result.data);
    };

    fetchData();
  }, [activePage]);

  let newArr = facts.data.map((item) => {
    return {
      value: item.fact,
      count: Math.floor(Math.random() * (35 - 15 + 1) + 15),
    };
  });

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <Link className="link-back" to="/">
        <AiOutlineArrowLeft /> &nbsp; Go Back
      </Link>
      <TagCloud
        className="tag-style"
        minSize={15}
        maxSize={35}
        tags={newArr}
        onClick={(tag) => alert(`'${tag.value}' was selected!`)}
      />
      <Pagination
        activePage={facts.current_page}
        itemsCountPerPage={Number(facts.per_page)}
        totalItemsCount={facts.total}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        linkClassPrev={facts.prev_page_url}
        linkClassNext={facts.next_page_url}
        linkClassLast={facts.last_page_url}
        innerClass={"ul_tag"}
        activeClass={"active_li"}
        activeLinkClass={"active_a"}
        itemClass={"li_tag"}
      />
    </>
  );
};

export default FactsScreen;
