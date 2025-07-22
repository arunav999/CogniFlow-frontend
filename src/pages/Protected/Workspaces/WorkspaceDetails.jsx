import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Services
import { getUserById } from "../../../services/Auth/authService";
import { workspaceById } from "../../../services/Workspaces/workspacesService";

const WorkspaceDetails = () => {
  const params = useParams();

  const [workspaceDetails, setWorkspaceDetails] = useState(null);

  useEffect(() => {
    const getWorkspaceDetails = async () => {
      try {
        const res = await workspaceById(params.id);
        console.log(res?.workspace);
        setWorkspaceDetails(res?.workspace);

        const userById = await getUserById(res?.workspace?.createdBy);
        console.log("user details:", userById?.user?.firstName);
      } catch (error) {
        console.log(error);
      }
    };

    getWorkspaceDetails();
  }, []);

  console.log("State", workspaceDetails);

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
        <p>Workspace created by: </p>
      </section>
    </>
  );
};

export default WorkspaceDetails;
