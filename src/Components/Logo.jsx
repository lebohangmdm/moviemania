import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-1 cursor-pointer text-3xl text-stone-900 "
    >
      <BiCameraMovie />
      MovieMania
    </Link>
  );
};

export default Logo;
