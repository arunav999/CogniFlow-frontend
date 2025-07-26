const WorkspaceModal = ({ type, onClose, wsName }) => {
  if (!type) return null;

  return (
    <>
      <div className="">
        {type === "edit" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Edit workspace</h2>
            <div className="">
              {wsName}
              <form action="">
                <button type="button" onClick={onClose} className="cursor-pointer">
                  Close
                </button>
              </form>
            </div>
          </>
        )}

        {type === "delete" && (
          <>
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              {" "}
              Confirm Deletion
            </h2>
            <p>Are you sure?</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Delete logic later
                  onClose();
                }}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WorkspaceModal;
