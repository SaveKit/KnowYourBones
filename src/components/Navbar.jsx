import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span style={{ color: 'black' }}>KnowYour</span>
          <span style={{ color: 'var(--primary-blue-color)' }}>Bones</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/learn">เรียนรู้</Link></li>
        <li><Link to="/exercises">แบบฝึกหัด</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;