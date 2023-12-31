import "./Navbar.css";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>

      <li>
        <a href="#about">About me</a>
      </li>

      <li>
        <a href="#project">project</a>
      </li>

      <li>
        <a href="#skills">skill</a>
      </li>

      <li>
        <a href="#contact">contact me</a>
      </li>
    </>
  );
  return (
    <div >
      <div className="navbar bg-[#00ADB5] flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold z-50"
            >
              {menuItem}
            </ul>
          </div>
          <div className="flex-1 flex gap-4 items-center">
            <img
              className="h-10"
              src="https://raw.githubusercontent.com/JPChoyon/JPChoyon-khan-portfolio/main/src/assets/images/logo/logo%20light%20without%20bg.png"
              alt="JP Choyon Khan website logo"
            />
            <h2 className=" text-xl brand-logo text-[#EEEEEE]"> JPCK</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-bold text-[#EEEEEE]">
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
