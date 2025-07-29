import { useParams } from "react-router-dom";

// Utils
import { pageTitle } from "../../../utils/utils";

// query hooks
import { useGetUserById } from "../../../hooks/query/useUsers";
import { useGetWorkspaceById } from "../../../hooks/query/useWorkspaces";
import { useGetProjectById } from "../../../hooks/query/useProjects";
import { Link } from "react-router-dom";

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
  const projectId = workspaceData?.workspace?.projects;

  // user by id hook
  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useGetUserById(userId);

  // Get all project by id
  const getAllProjectById = (id = []) => {
    if (id.length < 1) return;

    const eachProject = id?.map((project) => {
      // project by id
      // const {data: projectData} = useGetProjectById(project);
      // return projectData;
      const pId = project;
      return pId;
    });

    return eachProject;
  };

  console.log("Projects:", getAllProjectById(projectId));

  const details = workspaceData?.workspace;

  return (
    <>
      <section className="border xs:px-2 md:px-16">
        {/* Action button */}
        <div className="flex justify-between">
          <Link to={"/admin/workspaces"}>
            <span>Icon</span>
            <span>Back</span>
          </Link>

          <div className="">
            <span>Edit icon</span>
            <span>Delete icon</span>
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading">{workspaceData?.workspace?.name}</h2>
          <p>{workspaceData?.workspace?.description}</p>
        </div>
      </section>
    </>
  );
};

export default WorkspaceDetails;
