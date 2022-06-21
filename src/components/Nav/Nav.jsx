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
      <a href="#experience"
      onClick={() => setActiveNav("#experience")}
      className={activeNav === "#experience" ? 'active' : " "}
      >
        <AiOutlineBook />
      </a>
      <a href="#services"
      onClick={() => setActiveNav("#services")}
      className={activeNav === "#services" ? 'active' : " "}
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
