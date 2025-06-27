import { useState, useEffect } from "react";

import Links from "../../Reusable/Links/Links";
import Button from "../../Reusable/Button/Button";

import "./header.css";

const Header = () => {
  const [linkBg, setLinkBg] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // For handling scroll effect of header
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
        {/* style={{
              background: "radial-gradient(circle at center, #8dcac1, #53aea0)",
            }} */}
        {/* Mobile Nav toggle button - Visible below lg */}
        <div className="relative lg:hidden h-13 w-13 rounded-[50%] flex items-center justify-center shadow-nav">
          <button
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <div className="absolute rounded-[50%] h-full w-full top-0 right-0 z-30 bg-white">
              MENU
            </div>
            <div
              className={`h-11 w-11 rounded-[50%] ${
                isMobileNavOpen ? "scale-[80]" : "scale-[0]"
              } transition-all duration-800 ease-in-out`}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(141, 202, 193, 0.3), rgba(83, 174, 160, 0.3))",
                  backdropFilter: "blur(0.05px)",
              }}
            ></div>
          </button>
        </div>

        {/* <div className="fixed top-22 right-22 h-16 w-16 rounded-[50%] overflow-hidden">
          <input type="checkbox" name="nav-small" id="nav-toggle" />

          <label htmlFor="nav-toggle">MENU</label>

          <div
            className="absolute top-0 h-full w-full"
            
          >
            &nbsp;
          </div>
        </div> */}

        {/* NAVIGATION-FOR-LARGER-DEVICES */}
        <nav className="hidden lg:block">
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
