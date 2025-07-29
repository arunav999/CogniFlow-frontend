// ==================== Reusable Components ====================
import Input from "../../Reusable/Input/Input";
import Button from "../../Reusable/Button/Button";
import DropDown from "../../Reusable/Input/DropDown";

// Create WS Form
export const WorkspaceForm = () => {
  return (
    <>
      <form action="">
        {/* INPUTS */}
        <div className="">
          <Input type={"text"} id={"text"} placeholder={"Name"} />
          <Input type={"text"} id={"text"} placeholder={"Description"} />
          <DropDown />
          <Input type={"text"} id={"text"} placeholder={"Projects"} />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-between">
          <Button disabled={false} secondary={true}>
            Reset
          </Button>

          <Button disabled={false}>Submit</Button>
        </div>
      </form>
    </>
  );
};

// Edit WS Form
