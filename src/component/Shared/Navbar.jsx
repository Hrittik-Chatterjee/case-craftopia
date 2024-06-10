import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="w-[100px] h-80px]" src={"/caselogo1.png"} alt="" />
        </div>
        <div className="flex-none">
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

export default Navbar;
