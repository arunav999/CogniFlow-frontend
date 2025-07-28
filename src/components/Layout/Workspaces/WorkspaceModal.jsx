import { WorkspaceForm } from "./WorkspaceForm";

const WorkspaceModal = ({ type, onClose, wsName }) => {
  if (!type) return null;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 rounded-lg">
        {/* Create workspace */}
        {type === "create" && (
          <>
            <h2 className="heading">Create Workspace</h2>
            <WorkspaceForm />
          </>
        )}

        {/* Edit workspace */}
        {type === "edit" && (
          <>
            <h2 className="heading">Edit {wsName}</h2>
            <WorkspaceForm />
          </>
        )}

        {/* Delete workspace */}
        {type === "delete" && (
          <>
            <h2 className="font-heading text-2xl text-red-600">
              Delete workspace?
            </h2>
            <div className="">
              <p>
                Are you sure? You want to delete{" "}
                <span className="font-semibold">{wsName}</span>
              </p>

              <div className="mt-4 flex items-center justify-between">
                <button
                  className="border py-2 px-4 text-red-600 rounded-xl text-md hover:bg-red-50 cursor-pointer"
                  onClick={() => onClose()}
                >
                  Delete
                </button>

                <button
                  className="border py-2 px-4 text-purple-600 rounded-xl text-md hover:bg-purple-50 cursor-pointer"
                  onClick={() => onClose()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WorkspaceModal;
