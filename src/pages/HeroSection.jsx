import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../components/Button";

import singleBeer from "../Assets/single-beer.png";
import smallCould from "../Assets/cloud-294.png";
import mediumCould from "../Assets/cloud-347.png";
import bigCould from "../Assets/cloud-big.png";
import trumpImg from "../Assets/TrumpBeerTrump.png";
import barneyImg from "../Assets/TrumpBeerBarney.png";

export default function HeroSection() {
  const targetElement = useRef();

  return (
    <section id="hero_section" className="hero-section">
      <div className="hero-wrapper">
        <div className="container">
          <div className="hero-content">
            <h4 data-aos="fade-up">Welcome to</h4>
            <h1 data-aos="fade-up" data-aos-delay="250">
              The Future of Beer in Blockchain!
            </h1>
            <p data-aos="fade-up" data-aos-delay="350">
              Join the revolution with the funniest and most innovative
              beer-themed cryptocurrency.
            </p>
            <Button
              href="#"
              title="Buy Now"
              data-aos="fade-up"
              data-aos-delay="350"
              className="btn-yellow"
            />
            <img data-aos="fade-up" data-aos-delay="450" src={singleBeer} />
          </div>
        </div>
        <div className="cloud-wrapper">
          <div className="small-cloud">
            <img src={smallCould} alt="cloud" />
          </div>
          <div className="medium-cloud">
            <img src={mediumCould} alt="cloud" />
          </div>
          <div className="medium-cloud-right">
            <img src={mediumCould} alt="cloud" />
          </div>
          <div className="big-cloud">
            <img src={bigCould} alt="cloud" />
          </div>
          <div className="big-cloud-right">
            <img src={bigCould} alt="cloud" />
          </div>
          <div
            className="trump-img"
            ref={targetElement}
            data-aos="fade-right"
            data-aos-offset="-50"
          >
            <img src={trumpImg} alt="trump" />
          </div>
          <div
            className="barney-img"
            data-aos="fade-left"
            data-aos-offset="-50"
          >
            <img src={barneyImg} alt="cloud" />
          </div>
        </div>
      </div>
    </section>
  );
}
