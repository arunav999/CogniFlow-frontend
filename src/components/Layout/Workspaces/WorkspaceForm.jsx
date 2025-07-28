// ==================== Reusable Components ====================
import Input from "../../Reusable/Input/Input";
import Button from "../../Reusable/Button/Button";

// Create WS Form
export const WorkspaceForm = () => {
  return (
    <>
      <h2 className="heading">Create Workspace</h2>
      <form action="">
        {/* INPUTS */}
        <div className="">
          <Input type={"text"} id={"text"} placeholder={"Name"} />
          <Input type={"text"} id={"text"} placeholder={"Description"} />
          <Input type={"text"} id={"text"} placeholder={"Members"} />
          <Input type={"text"} id={"text"} placeholder={"Projects"} />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-between">
          <Button disabled={false} secondary={true}>
            Reset
          </Button>

          <Button disabled={false}>Submit</Button>
        </div>

        <label for="myDropdown">Choose an option:</label>
        <select id="myDropdown" name="myDropdown">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </form>
    </>
  );
};

// Edit WS Form
