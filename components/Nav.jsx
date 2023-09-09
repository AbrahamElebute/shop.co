import React from "react";
import { logo } from "../assets/svgs";
import Image from "next/image";
import styles from "@/styles";

const Nav = () => {
  return (
    <header className={`${styles.xPaddings} py-8 sticky top-0 `}>
      <a href="/">
        <Image src={logo} alt="" width={100} />
      </a>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <div>
        <div></div>
        <button></button>
        <button></button>
      </div>
    </header>
  );
};

export default Nav;
