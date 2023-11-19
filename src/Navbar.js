import "./NavbarStyles.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to='./'>
        <h1> MockTest Duniya</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>

        <li>
          <Link to='https://drive.google.com/file/d/1GO5VpqXd8pA6BpM590Y4d_0pakonKNC8/view?usp=drivesdk' target="_blank" onClick={handleClick} >Material</Link>
        </li>

        <li>
          <Link to="/about" onClick={handleClick}>About</Link>
        </li>

        <li>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};