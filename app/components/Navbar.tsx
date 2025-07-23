import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <p className="nav-logo">Resumind</p>
      </Link>

      <Link href="/upload">
        <p className="primary-button w-fit">Upload Resume</p>
      </Link>
    </nav>
  );
};
export default Navbar;
