import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const HeaderLayout = () => {
  return (
    <>
      <header className="bg-stone-2 bg-stone-100">
        <div className="container  mx-auto px-4 py-8 sm:px-6">
          <nav className="flex items-center justify-between">
            <Logo />
            <NavLinks />
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderLayout;
