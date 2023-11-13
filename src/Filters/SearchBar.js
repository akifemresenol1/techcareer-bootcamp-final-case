import React from "react";
import logo from "../Logo/iconmonstr-magnifier-lined-240.png";
import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <input type="text" placeholder="Etkinlik veya Sanatçı Arayın"></input>
        <button>
          <img className="searchimg" src={logo} alt="searchlogo"></img>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
