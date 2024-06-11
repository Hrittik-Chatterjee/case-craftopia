import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavbarFix = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/createcase">Create Custom Case</Link>
              </li>
              <li>
                <Link to="/productdemos">Product Demos</Link>
              </li>
              {user && (
                <>
                  <li onClick={handleLogout}>
                    <p>Logout</p>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex-1">
            <img className="w-[100px] h-80px]" src={"/caselogo1.png"} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/createcase">Create Custom Case</Link>
            </li>
            <li>
              <Link to="/productdemos">Product Demos</Link>
            </li>
            {user && (
              <>
                <li onClick={handleLogout}>
                  <p>Logout</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarFix;
