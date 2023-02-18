import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import fg_image from "../assets/logo.png"
import Head from "next/head";
import SearchBar from "./searchBar";
const MENU_LIST = [
  { text: "More", href: "/" },
  { text: "Our Products", href: "/about" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href="/">
          <Image
              src={fg_image}
              height={70}
          />
        </Link>
          
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
        {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        <SearchBar />
        <button type="submit" style={{width:"5rem",height:"2rem"}} >Login↗</button>
         <button type="submit" style={{width:"5rem",height:"2rem",backgroundColor:"#0057FF"}} >Sign Up↗</button>

          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
