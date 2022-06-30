import React from "react";
import "./portfolio.css";
import me from "../../assets/myself.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="Portfolio" />
          </div>
          <h3>Title</h3>

          <div className="portfolio__item-cta">
            <a href="" className="btn portfolio__item-cta" target="_blank">
              GitHub
            </a>
            <a
              href=""
              className="btn btn-primary portfolio__item-cta"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="Portfolio" />
          </div>
          <h3>Title</h3>

          <div className="portfolio__item-cta">
            <a href="" className="btn portfolio__item-cta" target="_blank">
              GitHub
            </a>
            <a
              href=""
              className="btn btn-primary portfolio__item-cta"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="Portfolio" />
          </div>
          <h3>Title</h3>

          <div className="portfolio__item-cta">
            <a href="" className="btn portfolio__item-cta" target="_blank">
              GitHub
            </a>
            <a
              href=""
              className="btn btn-primary portfolio__item-cta"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={me} alt="Portfolio" />
          </div>
          <h3>Title</h3>

          <div className="portfolio__item-cta">
            <a href="" className="btn portfolio__item-cta" target="_blank">
              GitHub
            </a>
            <a
              href=""
              className="btn btn-primary portfolio__item-cta"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
