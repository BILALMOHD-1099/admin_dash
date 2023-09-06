import React, {useEffect} from "react";
import Logo from "../images/image19.png"
import './Menu.css'
import { FaDelicious , FaShoppingCart , FaWallet , FaChartLine , FaClock , FaCog , FaSignOutAlt} from "react-icons/fa";


function Menu() {
    useEffect(()=>{
    const mainMenuLi = document.getElementById('mainMenu').querySelectorAll("li");
    
function changeActive(){
    mainMenuLi.forEach( n => n.classList.remove("active"));
    this.classList.add("active");
}


    mainMenuLi.forEach( n => n.addEventListener('click', changeActive))
    },[]);
  return (
    <menu>
        <img src={Logo} alt="" />

        <ul id="mainMenu">
            <Icon icon={<FaDelicious/>}/>
            <Icon icon={<FaShoppingCart/>}/>
            <Icon icon={<FaWallet/>}/>
            <Icon icon={<FaChartLine/>}/>
            <Icon icon={<FaClock/>}/>
           
        </ul>

        <ul className="lastMenu">
        <Icon icon={<FaCog/>}/>
        <Icon icon={<FaSignOutAlt/>}/>
        </ul>
    </menu>
  )
}


const Icon = ({icon}) => (
    <li>
        <a href="#">{icon}</a>
    </li>
);

export default Menu
