import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";

import { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" 
      className={activeNav === "#" ? 'active' : " "}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? 'active' : " "}
      >
        <AiOutlineUser />
      </a>
      <a href="#skills"
      onClick={() => setActiveNav("#skills")}
      className={activeNav === "#skills" ? 'active' : " "}
      >
        <AiOutlineBook />
      </a>
      <a href="#portfolio"
      onClick={() => setActiveNav("#portfolio")}
      className={activeNav === "#portfolio" ? 'active' : " "}
      >
        <RiServiceFill />
      </a>
      <a href="#contact"
      onClick={() => setActiveNav("#contact")}
      className={activeNav === "#contact" ? 'active' : " "}
      >
      <MdOutlineContactPage />
      </a>
    </nav>
  );
}
