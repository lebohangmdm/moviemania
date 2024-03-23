import { NavLink } from "react-router-dom";

const links = ["favourite", "watched"];

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-4 ">
      {links.map((link, i) => {
        return (
          <NavLink to={`${link}`} key={i} className={`link`}>
            {link}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinks;
