import { useParams } from "react-router-dom";

// Utils
import { pageTitle } from "../../../utils/utils";

// query hooks
import { useGetUserById } from "../../../hooks/query/useUsers";
import { useGetWorkspaceById } from "../../../hooks/query/useWorkspaces";
import { useGetProjectById } from "../../../hooks/query/useProjects";

const WorkspaceDetails = () => {
  // Page Title
  pageTitle(`Workspace name - Details`);

  // workspace id from route
  const { id } = useParams();

  // workspace by id hook
  const {
    data: workspaceData,
    isLoading: isWorkspaceLoading,
    error: workspaceError,
  } = useGetWorkspaceById(id);

  const userId = workspaceData?.workspace?.createdBy;
  const projectId = workspaceData?.workspace?.projects[0];

  // user by id hook
  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useGetUserById(userId);

  // project by id
  const {
    data: projectData,
    isLoading: isProjectLoading,
    error: projectError,
  } = useGetProjectById(projectId);

  const details = workspaceData?.workspace;

  return (
    <>
      <section className="">
        {isWorkspaceLoading && <p>Loading...</p>}

        {!isWorkspaceLoading && !workspaceError && (
          <div className="">
            <p>Workspace details</p>
            <p>Name: {workspaceData?.workspace?.name}</p>
            <p>
              Description:{" "}
              {details?.description === "" ? "Empty" : details?.description}
            </p>
            <p>
              Created by: {isUserLoading && <span>Loading user...</span>}
              {!isUserLoading && !userError && (
                <span>
                  {userData?.user?.firstName} {userData?.user?.lastName}
                </span>
              )}
            </p>
            <p>
              Projects: {isProjectLoading && <span>Loading Project...</span>}{" "}
              {!isProjectLoading && !projectError && (
                <span>{projectData?.project?.name}</span>
              )}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default WorkspaceDetails;
