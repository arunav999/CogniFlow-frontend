// ==================== 3rd-party Imports ====================
import { useState, useEffect } from "react";

// ==================== Reusable Components ====================
import Links from "../../../Reusable/Links/Links";
import Button from "../../../Reusable/Button/Button";

// ==================== Styles ====================
import "./header.css";

// ==================== Header Component ====================
// Main navigation header for the landing page, includes logo and navigation links
const Header = () => {
  // State for sticky background and mobile nav
  const [linkBg, setLinkBg] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Handle scroll effect for sticky header
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
        {/* ==================== Logo ==================== */}
        <h2 className="font-logo font-bold text-4xl">
          <a href="/" className="logo-gradient">
            Cogniflow
          </a>
        </h2>

        {/* ==================== Navigation ==================== */}
        {/* NAVIGATION-FOR-SMALLER-DEVICES */}
        <div className="relative lg:hidden h-13 w-13 rounded-[50%] flex items-center justify-center shadow-nav">
          <button
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <div
              className={`absolute rounded-[50%] h-full w-full top-0 right-0 z-30 ${
                linkBg ? "bg-light-bg-body" : "bg-light-bg-card"
              }`}
            >
              <span
                className={`nav-icon ${
                  isMobileNavOpen ? "nav-icon-checked" : ""
                }`}
              ></span>
            </div>
            <div
              className={`h-11 w-11 rounded-[50%] ${
                isMobileNavOpen ? "scale-[80]" : "scale-[0]"
              } transition-all duration-900 ease-[cubic-bezier(0.86, 0, 0.07, 1)]`}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(141, 202, 193, 0.3), rgba(83, 174, 160, 0.3))",
                backdropFilter: "blur(0.05px)",
              }}
            ></div>
          </button>
        </div>

        {/* NAVIGATION-FOR-LARGER-DEVICES */}
        <nav className={`nav ${isMobileNavOpen ? "nav-open" : ""} `}>
          <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
            <li onClick={() => setIsMobileNavOpen(false)}>
              <Links to="/#about" bg={linkBg}>
                About
              </Links>
            </li>
            <li onClick={() => setIsMobileNavOpen(false)}>
              <Links to="/#features" bg={linkBg}>
                Features
              </Links>
            </li>
            <li onClick={() => setIsMobileNavOpen(false)}>
              <Links to="/#demo" bg={linkBg}>
                Demo
              </Links>
            </li>
            <li onClick={() => setIsMobileNavOpen(false)}>
              <Links to="/#pricing" bg={linkBg}>
                Pricing
              </Links>
            </li>
            <li onClick={() => setIsMobileNavOpen(false)}>
              <Button disabled={false} redirect="/auth?type=signup">
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
