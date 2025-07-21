import { useParams } from "react-router-dom";

import { workspaceById } from "../../../services/Workspaces/workspacesService";
import { useEffect } from "react";

const WorkspaceDetails = () => {
  const params = useParams();

  useEffect(() => {
    const getWorkspaceDetails = async () => {
      try {
        const res = await workspaceById(params.id);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    getWorkspaceDetails();
  }, []);

  return (
    <>
      <section className="">Workspace details for id: {params.id}</section>
    </>
  );
};

export default WorkspaceDetails;
