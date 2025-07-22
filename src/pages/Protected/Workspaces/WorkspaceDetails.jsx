import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Services
import { getUserById } from "../../../services/Auth/authService";
import { workspaceById } from "../../../services/Workspaces/workspacesService";

// Utils
import { pageTitle } from "../../../utils/utils";
import { Link } from "react-router-dom";

const WorkspaceDetails = () => {
  const params = useParams();

  const [workspaceDetails, setWorkspaceDetails] = useState(null);

  let firstName;

  useEffect(() => {
    const getWorkspaceDetails = async () => {
      try {
        const res = await workspaceById(params.id);
        console.log(res?.workspace);
        setWorkspaceDetails(res?.workspace);

        const userById = await getUserById(res?.workspace?.createdBy);
        console.log("user details:", userById?.user?.firstName);
        firstName = userById;
        console.log(firstName);
      } catch (error) {
        console.log(error);
      }
    };

    getWorkspaceDetails();
  }, []);

  console.log("State", workspaceDetails);

  // Page Title
  pageTitle(`Workspace - ${workspaceDetails?.name}`);
  return (
    <>
      <section className="">
        <h2>Workspace details for id: {params.id}</h2>
        <p>Workspace name: {workspaceDetails?.name}</p>
        <p>
          Description:{" "}
          {workspaceDetails?.description === ""
            ? "Empty"
            : workspaceDetails?.description}
        </p>
        {workspaceDetails?.projects?.length < 1 && <p>No Projects</p>}
        {/* ADD PROJECTS */}
        {workspaceDetails?.projects?.map((project) => (
          <p key={project}>Project id: {project}</p>
        ))}
        <p>Workspace created by: {firstName}</p>

        <Link to="/admin/workspaces">
          Back
        </Link>
      </section>
    </>
  );
};

export default WorkspaceDetails;
