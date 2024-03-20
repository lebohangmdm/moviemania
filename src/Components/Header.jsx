import { BiCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-slate-200">
      <div className="container  mx-auto px-4 py-8 sm:px-6">
        <nav className="flex items-center justify-between">
          <a className="flex items-center gap-1 cursor-pointer text-3xl text-stone-900 ">
            <BiCameraMovie />
            Moviemania
          </a>

          <form action="">
            <input
              type="text"
              className="py-2 px-6 text-lg rounded-3xl  outline-none focus:ring-2 focus:ring-blue-600 lg:w-[360px] placeholder:text-stone-800"
              placeholder="Parasite"
            />
          </form>

          <ul className="hidden lg:flex lg:items-center gap-4 ">
            <li className="link">My Recommends</li>
            <li className="link">Watched Movies</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
