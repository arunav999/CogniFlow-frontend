import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <h2>404</h2>
      <p>The page {location.pathname} does not exist</p>
    </>
  );
};

export default NotFound;
