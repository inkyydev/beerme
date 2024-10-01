import { useEffect, useState } from "react";

import Button from "./Button";
import logo from "../Assets/logo.svg";

import "../components/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((prev) => !prev);
    console.log("dsadas");
  }

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").classList.add("active");
    } else {
      document.querySelector("body").classList.remove("active");
    }
  }, [isOpen]);

  return (
    <header>
      <div className="container">
        <div className="main-nav">
          <div className="main-nav__logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div
            onClick={handleMenu}
            className={`main-nav__items ${isOpen ? "active" : ""}`}
          >
            <a href="/" className="nav-links">
              Home
            </a>
            <a href="#tokenomics" className="nav-links">
              Tokenomics
            </a>
            <a href="#how_to_buy" className="nav-links">
              How to Buy
            </a>
            <a href="#roadmap" className="nav-links">
              Roadmap
            </a>
            <a href="#faq" className="nav-links">
              FAQ
            </a>
            <Button
              href="https://app.simplenote.com/"
              title="Buy Now"
              className="btn-yellow-small"
            />
          </div>
          <div className="main-nav__button">
            <Button
              href="https://app.simplenote.com/"
              title="Buy Now"
              className="btn-yellow-small"
            />
          </div>
          <div
            onClick={handleMenu}
            className={`main-nav__hamburger ${isOpen ? "active" : ""}`}
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
