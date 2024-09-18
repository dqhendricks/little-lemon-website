import Nav from "./Nav.jsx";
import logo from "../../assets/Logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="row">
      <img src={logo} className="logo" alt="Little Lemon logo" />
      <Nav />
    </header>
  );
}

export default Header;
