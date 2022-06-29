import React from "react";
import "./about.css";
import me from "../../assets/about-me.jpg";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__img">
            <img src={me} alt="My self Vipul Chaudhary" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Experience</h5>
              <small>Recently Graduated Fresher</small>
            </article>

            <article className="about__card">
              <MdOutlineComputer className="about__icon" />
              <h5>Courses</h5>
              <small>Completed 20+ Courses</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Projects</small>
            </article>
          </div>

          <p>
            My name is Vipul Chaudhary, computer engineering student. I'm 3 ⭐
            coder with max rating 1636 on CodeChef and have solved over 65
            questions on LeetCode. I enjoy making products that have the
            potential to influence the way the world thinks. I am familiar with
            Android development using Java and Kotlin, web development with
            HTML, CSS, and React, and backend development with NodeJS. I enjoy
            problem solving.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
