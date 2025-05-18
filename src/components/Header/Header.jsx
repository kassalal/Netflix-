import React from "react";
import logo from "../../assets/netflix.png";
import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountBox } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  return (
  
    <div>
      <div className="header-outer-container">
        <div className="header-container">
          <div className="header-left">
            <ul>
              <li>
                <img src={logo} className="myLogo" alt="netflix logo" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <IoSearchOutline />
              </li>
              <li>
                <IoMdNotificationsOutline />
              </li>
              <li>
                <MdOutlineAccountBox />
              </li>
              <li>
                <IoMdArrowDropdown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Header;
