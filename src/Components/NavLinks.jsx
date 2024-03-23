import { NavLink } from "react-router-dom";

const links = ["watched"];
const NavLinks = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-4 ">
      {links.map((link, i) => {
        return (
          <NavLink to={`/movies/${link}`} key={i} className={`link capitalize`}>
            {link} Movies
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinks;
