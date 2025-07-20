// React-Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FOOTER_DATA } from "../../../../utils/data";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#ddd] border-dashed p-12">
        {/* HEADING */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="heading">
            <span className="logo logo-footer-gradient">Cogniflow</span>
          </h2>
          <h4 className="sub-heading text-light-text-footer">
            Task management made simple.
          </h4>
          <div className="mt-2 text-light-text-footer cursor-pointer flex">
            <a
              href="https://www.facebook.com/arunav999/"
              target="blank"
              className="rounded-[50%] hover:shadow-s-link p-3 transition-all duration-300 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/arunav_999/"
              target="blank"
              className="rounded-[50%] hover:shadow-s-link p-3 transition-all duration-300 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/ArunavGm"
              target="blank"
              className="rounded-[50%] hover:shadow-s-link p-3 transition-all duration-300 text-lg"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/arunav-singh-61241b171/"
              target="blank"
              className="rounded-[50%] hover:shadow-s-link p-3 transition-all duration-300 text-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/arunav999"
              target="blank"
              className="rounded-[50%] hover:shadow-s-link p-3 transition-all duration-300 text-lg"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] xs:gap-12 md:gap-4">
          {FOOTER_DATA.map((item) => (
            <div key={item.id} className="text-2xl flex flex-col items-center ">
              <div className="flex items-center justify-start gap-2 w-38 pb-2 pl-4 pr-2 hover:shadow-c-link rounded transition duration-300 text-light-text-footer">
                <span>{<item.logo />}</span>
                <span>{item.head}</span>
              </div>

              <div className="flex flex-col items-start gap-2">
                {item.items.map((inner) => (
                  <div
                    key={inner.id}
                    className="text-lg font-light hover:shadow-f-link py-1 px-4  transition-all duration-300 w-fit rounded text-[#777]"
                  >
                    <a href={inner.href} className="flex items-center gap-2">
                      <span>{<inner.logo />}</span>
                      <span>{inner.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-center mt-12 gap-1 text-sm text-[#777] font-body">
          <p className="xs:text-[12px] md:text-[14px]">
            &copy; {new Date().getFullYear()}.{" "}
            <span className="logo-footer">Cogniflow</span>.All rights reserved.
          </p>

          <p className="xs:text-[12px] md:text-[14px]">
            Built by{" "}
            <a
              href="https://arunavsingh.netlify.app/"
              target="blank"
              className="inline-block px-2 border-b-2 font-heading hover:text-[#ddd] hover:bg-[#777] transition-all duration-300"
            >
              Arunav Singh
            </a>{" "}
            with 💙 using the MERN Stack.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
