import React from "react";
import "./skills.css";

import { BsPatchCheckFill } from "react-icons/bs";
import { skills } from "../../data/data";

export default function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Web Development</h3>
          <div className="skills__content">
            {skills[0].webd.map((skill) => {
              return (
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="skills__backend">
          <h3>App Development</h3>
          <div className="skills__content">
            {skills[1].appd.map((skill) => {
              return (
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="skills__backend">
          <h3>Other</h3>
          <div className="skills__content">
            {skills[2].other.map((skill) => {
              return (
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
