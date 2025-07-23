// ==================== 3rd-party Imports ====================
import { useRef, useState } from "react";

// ==================== Icons ====================
import { FaUser } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDelete } from "react-icons/md";

// ==================== Utilities ====================
import { firstNameInitials, lastNameInitials } from "../../../utils/utils";

// ==================== Profile Photo Component ====================
// Allows user to upload, preview, and validate a profile photo
const ProfilePhoto = ({ fName, lName, onSelect }) => {
  // Ref for file input
  const imageRef = useRef(null);
  // State for image file, error, and preview
  const [image, setImage] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Max file size in MB
  const MAX_FILE_SIZE_MB = 2;

  // Handle image file selection and validation
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check file size
    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFileSizeError(true);
      return;
    }

    setFileSizeError(false);
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    onSelect?.(file);
  };

  // ==================== Render Profile Photo ====================
  return (
    <>
      <div
        className={`border-2 ${
          fileSizeError ? "border-red-600" : "border-gray-300"
        } h-36 w-36 rounded-[50%] mb-6 shadow-profile-pic relative`}
      >
        <input
          type="file"
          name="profilePhoto"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          ref={imageRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {!image ? (
          <div className="flex items-center justify-center h-full w-full relative gap-2 xs:text-[66px] sm:text-[86px] font-logo text-gray-300 xs:font-semibold sm:font-bold">
            {!!fName || !!lName ? (
              <>
                <p>{firstNameInitials(fName)}</p>
                <p>{lastNameInitials(lName)}</p>
              </>
            ) : (
              <FaUser className="text-gray-300 text-4xl" />
            )}
            <button
              className="absolute bottom-2 right-0 bg-light-bg-body border-2 border-gray-300 p-2 rounded-[50%] cursor-pointer"
              onClick={() => imageRef.current.click()}
              type="button"
            >
              <IoMdCloudUpload className="text-gray-400 text-2xl" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full relative rounded-[50%]">
            <img
              src={previewUrl}
              alt="profile Img"
              className="rounded-[50%] h-full w-full object-cover"
            />

            <button
              className="absolute bottom-2 right-0 bg-light-bg-body border-2 border-gray-300 p-2 rounded-[50%] cursor-pointer"
              onClick={() => {
                setImage(null);
                setPreviewUrl(null);
                onSelect?.(null);
              }}
            >
              <MdDelete className="text-gray-400 text-lg hover:text-red-700" />
            </button>
          </div>
        )}

        {fileSizeError && (
          <p
            className={`text-center font-body ${
              fileSizeError ? "text-red-700" : "text-gray-400"
            }`}
          >{`File size < 2MB`}</p>
        )}
      </div>
    </>
  );
};

export default ProfilePhoto;
