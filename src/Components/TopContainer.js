import React, {useEffect} from "react";
import { BiSearch } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Me from '../images/image8.png'

function TopContainer() {

    useEffect(() =>{
        const menuTarget = document.getElementById("menuChevron");
        const menuContainer = document.getElementById("menuContainer");

        menuTarget.addEventListener("mouseenter" ,() => {
          menuTarget.style.transform = 'rotate(180deg)'
            menuContainer.style.transform = 'translateX(0px)';
        });

        menuContainer.addEventListener("mouseleave" ,() => {
          menuTarget.style.transform = 'rotate(0deg)'
          menuContainer.style.transform = 'translateX(300px)';
        });
    },[])
  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="search items, collections" />
        <i>
          <BiSearch />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>

        <div className="profileImage">
            <img src={Me} alt="" />
        </div>

        <p className="profileName">Bilal Ahmed</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
            <ul>
                <li>Web Design</li>
                <li>React</li>
                <li>UI / UX</li>
                <li>Web</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
