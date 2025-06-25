import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link
        to="/"
        className={`relative inline-block px-10 py-4 bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] rounded-4xl transition-all duration-200 hover:shadow-link active:shadow-link-active after:content-[''] after:inline-block after:h-full after:w-full after:rounded-4xl after:bg-white after:absolute after:top-0 after:left-0 after:-z-[1] hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] after:transition-all after:duration-500 hover:after:opacity-0`}
      >
        Custom Link
      </Link>
    </>
  );
};

export default Links;
