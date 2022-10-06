import React from "react";
import "./Nav.css";
import { SiReddit } from "react-icons/si";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="container">
      <div className="heading">
        <SiReddit className="logo" />
        <h1>Snippet</h1>
      </div>
      <div className="searchbar">
        <form className="search">
          <input type="text" placeholder="Search" aria-label="Search posts" />
          <button type="submit" aria-label="Search">
            <FiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;