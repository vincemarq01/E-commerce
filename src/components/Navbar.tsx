import React, { useState } from 'react';
import iconcart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import menuicon from '../assets/icon-menu.svg';
import closeicon from '../assets/icon-close.svg';

import logo from '../assets/logo.svg';
const Navbar: React.FC = () => {
  const [nav, setNav] = useState(true);

  const navBehavior = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto border-b border-gray-300 ">
      <h1 className="md:flex w-none p-5 text-3xl font-bold sm:hidden hidden">
        <img src={logo} alt="logo"></img>
      </h1>
      <ul className="hidden md:flex pt-2 w-full ">
        <li className="p-5">Collections</li>
        <li className="p-5">Men</li>
        <li className="p-5">Women</li>
        <li className="p-5">About</li>
        <li className="p-5">Contact</li>
      </ul>
      <div className="flex justify-start items-center">
        <div onClick={navBehavior} className="md:hidden">
          {!nav ? (
            <img className="m-5" src={closeicon} alt="Iconcart"></img>
          ) : (
            <img className="m-5" src={menuicon} alt="Iconcart"></img>
          )}
        </div>
        <img className="md:hidden md:p-5 " src={logo} alt="logo"></img>
      </div>
      <div className="flex justify-end items-center m-5">
        <img className="pr-0" src={iconcart} alt="Iconcart"></img>
        <img
          className="ml-5 w-[25px] h-[25px] "
          src={avatar}
          alt="avatar"
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
