import React from "react";
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css'
import LeftOval from '../../Assets/LeftOval.png'
// import Oval from '../../Assets/Oval.png'
const Navbar = () => {
  return (
    <>
      <img src={LeftOval} className="leftoval" alt="" />
      {/* <img src={Oval} className="rightOval" alt="" /> */}
      <nav className=" nav px-10 py-3 flex items-center justify-between">
        <Link to="/">
          <div className=" nav-brand-name flex items-center">
            <span className="text-2xl font-bold">Medi</span>
            <span className="brand-name-care text-2xl font-bold">Care+ </span>
          </div>
        </Link>
        <div className=" nav-right nav-list flex items-center gap-8">
          <div className="flex mr-10 gap-4 ">
            <Link to="/home" className="mr-5 nav-item ">
              <span className="">Home</span>
            </Link>
            <Link to="/about" className="mr-5 nav-item ">
              <span className="">About</span>
            </Link>
            <Link to="/service" className="mr-5 nav-item ">
              <span className="">Service</span>
            </Link>
            <Link to="/news " className="nav-item">
              <span className="">News</span>
            </Link>
          </div>
          <button className="nav-btn">Contact</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;