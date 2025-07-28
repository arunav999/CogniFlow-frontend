// ==================== Reusable Components ====================
import Input from "../../Reusable/Input/Input";
import Button from "../../Reusable/Button/Button";

// Create WS Form
export const WorkspaceForm = () => {
  return (
    <>
      <h2 className="heading">Create Workspcae</h2>
      <form action="">
        <div className="">
          <Input type={"text"} id={"text"} placeholder={"Name"} />
          <Input type={"text"} id={"text"} placeholder={"Name"} />
          <Input type={"text"} id={"text"} placeholder={"Name"} />
          <Input type={"text"} id={"text"} placeholder={"Name"} />
        </div>

        <Button disabled={false}>Submit</Button>
      </form>
    </>
  );
};

// Edit WS Form
