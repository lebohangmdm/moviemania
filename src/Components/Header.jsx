import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="bg-stone-2 bg-stone-100">
      <div className="container  mx-auto px-4 py-8 sm:px-6">
        <nav className="flex items-center justify-between">
          <Logo />
          <SearchForm />
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
