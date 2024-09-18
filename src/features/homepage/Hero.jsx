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
            <Button>Reserve a Table</Button>
          </div>
        </div>
        <img src={heroImage} />
      </div>
    </section>
  );
}

export default Hero;
