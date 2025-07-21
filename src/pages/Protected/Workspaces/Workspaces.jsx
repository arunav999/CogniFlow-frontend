import useUserAuth from "../../../hooks/useUserAuth";

import { Link, Outlet } from "react-router-dom";

const Workspaces = () => {
  const { user } = useUserAuth();

  return (
    <>
      <section className="">
        <ul>
          {user?.workspaces.map((workspace) => (
            <li key={workspace} className="underline text-blue-700">
              <Link to={`workspace/${workspace}`}>
                Workspace Name (this will be added)
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default Workspaces;
