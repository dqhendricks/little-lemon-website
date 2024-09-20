import { useLocation, Link } from "react-router-dom";
import Button from "../../components/Button.jsx";

function BookingConfirmed() {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state;

  return (
    <section className="booking-page">
      <header>
        <div className="row">
          <div>
            <h2>Reservation Booked</h2>
            <h3>See you soon!</h3>
          </div>
        </div>
      </header>
      <div className="row">
        <div className="container reservation-details">
          <h4>Your reservation details</h4>
          <p>
            <em>Date:</em> {date}
          </p>
          <p>
            <em>Time:</em> {time}
          </p>
          <p>
            <em>Guests:</em> {guests}
          </p>
          {occasion && (
            <p>
              <em>Occasion:</em> {occasion}
            </p>
          )}
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookingConfirmed;
