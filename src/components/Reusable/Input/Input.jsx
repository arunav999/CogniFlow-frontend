// ==================== 3rd-party Imports ====================
import { useState, useEffect, useRef } from "react";

// ==================== Icons ====================
import { PiEyeDuotone, PiEyeClosedDuotone } from "react-icons/pi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa6";

import UserCard from "../Cards/UserCard";

// ==================== Input Component ====================
// Reusable input field with support for password toggle, error display, and icons
const Input = ({
  id,
  name,
  value,
  required = true,
  dropDown = false,
  type,
  placeholder,
  ref,
  onChange,
  onBlur,
  icon,
  error,
  errorMessage,
}) => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Check if input is filled
  const isFilled = value?.trim().length > 0;

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Drop down
  const [drop, setDrop] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDrop(false);
      }
    };

    if (drop) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drop]);

  // ==================== Render Input ====================
  return (
    <>
      <div className="flex flex-col">
        <div
          className={`border-2 ${
            error ? "border-red-600" : "border-gray-300"
          } relative flex min-w-82 font-body rounded-2xl text-gray-700 items-center`}
        >
          {" "}
          <span
            className={`pl-1.5 ${error ? "text-red-700" : "text-gray-500"}`}
          >
            {icon}
          </span>
          {/* ===== If drop-down ===== */}
          {dropDown && (
            <>
              <div
                ref={dropDownRef}
                className="py-4 px-6 text-gray-500 flex items-center justify-between w-full cursor-pointer"
                onClick={() => {
                  setDrop((prev) => !prev);
                }}
              >
                <p>Select members</p>
                <p
                  className={`transform ${
                    drop ? "rotate-0" : "rotate-180"
                  } transition-all rounded-[50%] p-[3px] hover:bg-gray-300`}
                >
                  <FaChevronUp />
                </p>
              </div>

              {drop && (
                <div className="animate-modal-in no-scrollbar bg-gray-200 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[90%] z-20 py-4 px-6 rounded-2xl max-h-[380px] overflow-y-auto flex flex-col gap-4">
                  {/* Dynamic */}
                  <UserCard />
                </div>
              )}
            </>
          )}
          {/* ===== If not drop-down ===== */}
          {/* INPUT */}
          {!dropDown && (
            <>
              <input
                id={id}
                value={value}
                name={name}
                type={
                  type === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : type
                }
                className="peer outline-none py-4 px-6 w-[90%]"
                placeholder=" "
                required={required}
                ref={ref}
                onBlur={onBlur}
                onChange={onChange}
              />
              {/* INPUT */}
              <label
                htmlFor={id}
                className={`pointer-events-none absolute px-1 left-6 ${
                  error ? "text-red-700" : "text-gray-500"
                } transition-all duration-200 bg-light-bg-body ${
                  isFilled ? "-top-2.5 text-sm" : "top-4 text-base"
                } peer-focus:-top-2.5 peer-focus:text-sm`}
              >
                {placeholder} {required && <span>*</span>}
              </label>
            </>
          )}
          {/* EYE-ICON */}
          {type === "password" && (
            <span
              className={`cursor-pointer ${
                error ? "text-red-700" : "text-gray-500"
              } pr-2`}
            >
              {showPassword ? (
                <PiEyeDuotone size={22} onClick={togglePassword} />
              ) : (
                <PiEyeClosedDuotone size={22} onClick={togglePassword} />
              )}
            </span>
          )}
        </div>

        {/* Error Message */}
        {(name === "lastName" || required) && (
          <div className="flex items-center gap-2 px-4 text-red-700 font-body text-sm my-1 h-4 w-full">
            {error && (
              <>
                <span className="text-base">
                  <MdOutlineErrorOutline />
                </span>
                <p>{errorMessage}</p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
