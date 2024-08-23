import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import logo from "../../assets/banner/logo.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/allToy"
      >
        All Toy
      </NavLink>
      {user ? (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/addToy"
          >
            Add Toy
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/myToy"
          >
            My Toys
          </NavLink>
        </>
      ) : (
        ""
      )}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/blogs"
      >
        Blogs
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#eeeded] shadow-2xl fixed z-30">
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
          <div className="navbar-center w-3 h-3 md:w-12 md:h-12 rounded-lg md:ml-20 mr-2">
            <img src={logo} alt="" />
          </div>
          <h2 className="text-sm md:text-xl font-semibold md:font-bold uppercase">
            <span className="text-[#ffa791]">Kiddie</span> Craft
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 space-x-7">{navItems}</ul>
        </div>
        <div className="navbar-end md:mr-20">
          {user ? (
            <>
              <div
                className="h-10 w-10 mr-5 tooltip tooltip-left tooltip-primary"
                data-tip={user.displayName}
              >
                <img
                  className="h-full w-full rounded-full "
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <Link to="/login">
                {" "}
                <p onClick={handleLogOut} className="text-lg uppercase flex items-center justify-between hover:text-gray-600 hover:scale-105">
                 Sing Out<MdOutlineLogout className="ml-3"/>
                </p>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <p className="text-xl uppercase flex items-center justify-between hover:text-gray-600 hover:scale-105"><FaRegUser className="mr-2"></FaRegUser>Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
