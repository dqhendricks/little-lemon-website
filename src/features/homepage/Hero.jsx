import { Link } from "react-router-dom";
import heroImage from "../../assets/restauranfood.jpg";
import Button from "../../components/Button.jsx";

function Hero() {
  return (
    <section className="bg-primary-dark">
      <div className="row hero text-light">
        <div>
          <h2 className="text-primary-light">Little Lemon</h2>
          <h3>Chicago</h3>
          <p className="text-lead">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <Link to="/reservations">
              <Button>Reserve a Table</Button>
            </Link>
          </div>
        </div>
        <img src={heroImage} alt="Bruchetta" />
      </div>
    </section>
  );
}

export default Hero;
