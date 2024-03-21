const links = ["Favourite", "Watched Movies"];

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-4 ">
      {links.map((link, i) => {
        return (
          <li key={i} className="link">
            {link}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
