import { useParams } from "react-router-dom";

const WorkspaceDetails = () => {
  const params = useParams();

  return (
    <>
      <section className="">Workspace details for id: {params.id}</section>
    </>
  );
};

export default WorkspaceDetails;
