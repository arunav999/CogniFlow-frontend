import { useRef, useState } from "react";

import { FaUser } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const ProfilePhoto = () => {
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  return (
    <>
      <div className="h-36 w-36 rounded-[50%] mb-6 shadow-profile-pic relative">
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          ref={imageRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {!image ? (
          <div className="flex items-center justify-center h-full w-full relative">
            <FaUser className="text-gray-300 text-4xl" />
            <button
              className="absolute bottom-2 right-0 bg-light-bg-body border-2 border-gray-300 p-2 rounded-[50%] cursor-pointer"
              onClick={() => imageRef.current.click()}
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
              }}
            >
              <MdDelete className="text-gray-400 text-lg" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePhoto;
