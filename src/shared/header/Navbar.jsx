import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
                <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/">Home</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/blogs">Blogs</NavLink>
    </>
  return (
    <div>
      <div className="navbar bg-cyan-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z"
            >
             {navItems}
            </ul>
          </div>
          <h2 className="normal-case text-xl md:text-2xl font-semibold md:font-bold md:ml-20"><span className="text-primary">Sport</span>Verse</h2>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 space-x-7">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end md:mr-20">
          <Link><button className="btn-primary">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;