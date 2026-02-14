import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/action";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#15173D] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1720192861639-1524439fc166?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Company Logo"
              className="h-8 w-8 object-contain"
            />{" "}
            <span className="text-[#F1E9E9] text-xl font-semibold">
              WorkSphere
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link className="text-[#F1E9E9] hover:text-[#E491C9]" to="/about">
            About
          </Link>
          <Link className="text-[#F1E9E9] hover:text-[#E491C9]" to="/employees">
            Employee
          </Link>

          <Link className="text-[#F1E9E9] hover:text-[#E491C9]" to="/contact">
            Contact
          </Link>

          {isAuthenticated ? (
            <button
              onClick={() => {
                dispatch(logoutUser());
                navigate("/login");
              }}
              className="ml-4 bg-[#982598] text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="ml-4 bg-[#982598] text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Login
            </button>
          )}
        </div>

        <button
          className="md:hidden text-[#F1E9E9]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#15173D] px-6 pb-4">
          <Link
            className="text-[#F1E9E9] hover:text-[#E491C9]"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-[#F1E9E9] hover:text-[#E491C9]"
            to="/employees"
            onClick={() => setIsOpen(false)}
          >
            Employee
          </Link>
          <Link
            className="text-[#F1E9E9] hover:text-[#E491C9]"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {isAuthenticated ? (
            <button
              onClick={() => {
                dispatch(logoutUser());
                navigate("/login");
              }}
              className="ml-4 bg-[#982598] text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="ml-4 bg-[#982598] text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
