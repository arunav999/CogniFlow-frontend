import { useParams } from "react-router-dom";

// Utils
import { pageTitle } from "../../../utils/utils";

import { useGetWorkspaceById } from "../../../hooks/query/useWorkspaces";

const WorkspaceDetails = () => {
  // Page Title
  pageTitle(`Workspace name - Details`);

  // workspace id from route
  const { id } = useParams();

  const { data, isLoading, error } = useGetWorkspaceById(id);
  console.log(data);

  const details = data?.workspace;

  return (
    <>
      <section className="">
        {isLoading && <p>Loading...</p>}

        {!isLoading && !error && (
          <div className="">
            <p>Workspace details</p>
            <p>Name: {data?.workspace?.name}</p>
            <p>
              Description:{" "}
              {details?.description === "" ? "Empty" : details?.description}
            </p>
            <p></p>
          </div>
        )}
      </section>
    </>
  );
};

export default WorkspaceDetails;
