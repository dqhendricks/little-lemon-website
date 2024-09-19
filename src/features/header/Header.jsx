import NavList from "../../components/NavList.jsx";
import NavPopup from "./NavPopup.jsx";
import logo from "../../assets/Logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="row">
      <img src={logo} className="logo" alt="Little Lemon logo" />
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
