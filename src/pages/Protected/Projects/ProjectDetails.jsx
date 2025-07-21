import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams();

  return (
    <>
      <section className="">Project Details for id: {params.id}</section>
    </>
  );
};

export default ProjectDetails;
