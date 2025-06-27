const Footer = () => {
  return (
    <>
      <footer className="border border-dashed">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="heading">
            <span className="logo logo-gradient">Cogniflow</span>
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            Task management made simple.
          </h4>
        </div>

        {/* QUICK-LINKS-CARD */}
        <div className="">
          {/* PRODUCT */}
          <div className="">
            {/* head*/}
            <div className="">
              <h2>Product</h2>
            </div>

            {/* list */}
            <div className="">
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Demo</li>
              </ul>
            </div>
          </div>

          {/* COMPANY */}
          <div className="">
            {/* head */}
            <div className="">
              <h2>Company</h2>
            </div>

            {/* list */}
            <div className="">
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="">
            {/* head */}
            <div className="">
              <h2>Support</h2>
            </div>

            {/* list */}
            <div className="">
              <ul>
                <li>FAQs</li>
                <li>Help Center</li>
                <li>Report Issue</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="">
          <p>
            &copy; <span className="logo">Cogniflow</span>.All rights reserved.
          </p>

          <p>
            Built by{" "}
            <a href="https://arunavsingh.netlify.app/" target="blank">
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
