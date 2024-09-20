import { Link } from "react-router-dom";
import NavList from "../../components/NavList.jsx";
import NavPopup from "./NavPopup.jsx";
import logo from "../../assets/Logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="row">
      <Link to="/" title="Go to Home">
        <img src={logo} className="logo" alt="Little Lemon logo" />
      </Link>
      <div className="navSpread">
        <NavList />
      </div>
      <div className="navPopup">
        <NavPopup />
      </div>
    </header>
  );
}

export default Header;
