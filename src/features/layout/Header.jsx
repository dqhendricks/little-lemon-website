import Nav from "../nav/Nav.jsx";
import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} />
      <Nav />
    </header>
  );
}

export default Header;
