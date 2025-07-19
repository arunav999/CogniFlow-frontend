import { useState, useEffect } from "react";

import useUserAuth from "../../../../hooks/useUserAuth";

import { logoutUser } from "../../../../services/Auth/authService";

const Topbar = () => {
  const { user, setUser } = useUserAuth();

  const [image, SetImage] = useState({
    img: false,
    URL: null,
  });

  const handleLogout = async () => {
    const res = await logoutUser();
    console.log(res);

    setUser(null)
  };

  const imageUrl = user?.avatar?.url;
  useEffect(() => {
    if (imageUrl === null) {
      SetImage({
        img: false,
        URL: null,
      });
    }

    SetImage({
      img: true,
      URL: imageUrl,
    });
  }, [imageUrl]);

  // SetImage((prev)=>({
  //   ...prev,
  // }))

  return (
    <>
      <header className="border py-[1rem] px-[3rem] fixed w-full top-0 flex justify-between items-center">
        <div className="">{user?.company}</div>
        <div className="capitalize">{user?.role} Dashboard</div>

        {/* IMG and Toggle Sidebar */}
        <div className="border h-12 w-12">
          {!image.img ? (
            <div className="">
              <img src={image.URL} alt="Profile Pic" />
            </div>
          ) : (
            ""
          )}
        </div>

        <button onClick={handleLogout}>Logout</button>
      </header>
    </>
  );
};

export default Topbar;
