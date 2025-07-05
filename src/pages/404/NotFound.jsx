import { useLocation } from "react-router-dom";

import Links from "../../components/Reusable/Links/Links";

import { pageTitle } from "../../utils/utils";

const NotFound = () => {
  pageTitle("404 - Not found");

  const location = useLocation();

  return (
    <>
      <section className="section">
        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="heading">404 &mdash; Page not found</h2>
          <h4 className="sub-heading text-light-text-secondary">
            Oops! We couldn't find the page you're looking for
          </h4>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 font-body text-gray-600">
          <p>The path {location.pathname} does not exist.</p>

          <div className="flex gap-2">
            <Links to="/">Home</Links>
            {/* <Links to="/admin">Dashboard</Links> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
