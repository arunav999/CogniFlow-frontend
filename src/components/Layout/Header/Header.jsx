import { useState, useEffect } from "react";

import Links from "../../Reusable/Links/Links";
import Button from "../../Reusable/Button/Button";

import "./header.css";

const Header = () => {
  const [linkBg, setLinkBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navArea = document.getElementById("navArea");
      if (window.scrollY > 0) {
        navArea.classList.add("is-sticky");
        setLinkBg(true);
      } else {
        navArea.classList.remove("is-sticky");
        setLinkBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header" id="navArea">
        {/* LOGO */}
        <h2 className="font-logo font-bold text-4xl">
          <a href="/" className="logo-gradient">
            Cogniflow
          </a>
        </h2>

        {/* NAVIGATION */}
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Links to="/about" bg={linkBg}>
                About
              </Links>
            </li>
            <li>
              <Links to="/features" bg={linkBg}>
                Features
              </Links>
            </li>
            <li>
              <Links to="/demo" bg={linkBg}>
                Demo
              </Links>
            </li>
            <li>
              <Links to="/pricing" bg={linkBg}>
                Pricing
              </Links>
            </li>
            <li>
              <Button secondary disabled={false}>
                Get Started
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
