import { createBrowserRouter } from "react-router-dom";

import HomePage from "../components/Layout/LandingPage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
