// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import seacrh from "../../images/seacrh.png";
import home from "../../images/home.png";
import "./navbar.css"; // Import your CSS file for the Navbar

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search value:", searchValue);
    // Implement actual search functionality here
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="home" src={home} alt="" />
      </Link>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <img className="searchbutton" src={seacrh} alt="" />
        </button>
      </form>

      <div className="account-dropdown" onMouseLeave={closeDropdown}>
        <button className="account-button" onMouseEnter={toggleDropdown}>
          Account
        </button>
        {isDropdownOpen && (
          <div className="dropdown-options">
            <Link to="/profile" onClick={closeDropdown}>
              Profile
            </Link>
            <Link to="/logout" onClick={closeDropdown}>
              Logout
            </Link>
            <Link to="/enlist" onClick={closeDropdown}>
              Enlist
            </Link>
            <Link to="/yourbids" onClick={closeDropdown}>
              My Bids
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
