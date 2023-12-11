import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#79E0EE]">
        <div className="flex-1 flex gap-4">
          <img
            className="h-10"
            src="https://raw.githubusercontent.com/JPChoyon/JPChoyon-khan-portfolio/main/src/assets/images/logo/logo%20dark%20without%20bg.png"
            alt="JP Choyon Khan website logo"
          />
          <h2 className="font-bold text-xl"> JPCK</h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
