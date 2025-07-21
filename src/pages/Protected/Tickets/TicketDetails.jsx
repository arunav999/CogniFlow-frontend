import { useParams } from "react-router-dom";

const TicketDetails = () => {
  const params = useParams();

  return (
    <>
      <section className="">Ticket Details for id: {params.id}</section>
    </>
  );
};

export default TicketDetails;
