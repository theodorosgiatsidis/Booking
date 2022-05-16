import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">GevrisBooking</span>
        </Link>
        <div className="navItems">
          <button className="navButtons">Login</button>
          <button className="navButtons">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
