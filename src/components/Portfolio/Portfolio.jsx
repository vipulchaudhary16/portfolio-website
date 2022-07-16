import React from "react";
import "./portfolio.css";

import { portfolioData } from "../../data/data";

export default function Portfolio() {
  console.log(portfolioData);
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((data) => {
          return (
            <>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={data.image} alt="Portfolio" />
                </div>
                <h3>{data.title}</h3>

                <div className="portfolio__item-cta">
                  <a
                    href={data.github_link}
                    className={
                      data.github_link
                        ? "btn portfolio__item-cta "
                        : "disable_link"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={data.live_link}
                    className={
                      data.live_link
                        ? "btn btn-primary portfolio__item-cta "
                        : "disable_link"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
}
