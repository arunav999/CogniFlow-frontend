// Route Error
import { useRouteError } from "react-router-dom";

// Error pages
import NotFound from "./NotFound";
import Unauthorized from "./Unauthorized";
import Forbidden from "./Forbidden";

const ErrorPage = () => {
  const error = useRouteError();
  const status = error?.status;

  // Not found pages
  if (status === 404) return <NotFound />;

  // Unauthorized
  if (status === 403) return <Unauthorized />;

  // Forbidden
  if (status === 401) return <Forbidden />;

  return (
    <>
      <div className="">
        <h1>Unexpected Error</h1>
        <p>{error?.message || "Something went wrong."}</p>
      </div>
    </>
  );
};

export default ErrorPage;
