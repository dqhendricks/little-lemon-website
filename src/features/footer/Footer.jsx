import "./footer.css";
import logo from "../../assets/logo footer.png";
import NavList from "../../components/NavList.jsx";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/icons.jsx";

function Footer() {
  return (
    <footer className="bg-primary-dark">
      <div className="row">
        <img src={logo} alt="Little Lemon logo" />
        <div>
          <h4>Navigation</h4>
          <NavList />
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              Little Lemon
              <br />
              331 LaSalle Street
              <br />
              Chicago, Illinois
              <br />
              60602 USA
            </li>
            <li>(708) 555-1234</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h4>Socials</h4>
          <ul className="socials">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
