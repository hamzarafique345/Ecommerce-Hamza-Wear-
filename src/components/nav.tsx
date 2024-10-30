import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
export default function NAV() {
  return (
    <div id="nav-box1">
      {/* Nav Butoon */}

      <div id="nav-box2">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Categories</li>
          <li>Sales</li>
        </ul>
      </div>
      <div id="navbox3">
        <h1 id="text-logo">Hamza</h1>
        <h1 id="text-logo">Wear</h1>
      </div>

      {/*Search Section */}
      <div id="navbox4">
     
        <input type="text" id="input1" placeholder="Search Product" />
      <AiOutlineSearch className="search-icon" />
      </div>
    </div>
  );
}
