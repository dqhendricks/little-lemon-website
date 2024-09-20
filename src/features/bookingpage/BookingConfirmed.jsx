import { useLocation, Link } from "react-router-dom";
import Button from "../../components/Button.jsx";
import {
  CalendarDateIcon,
  AlarmIcon,
  PeopleIcon,
  Cake2Icon,
} from "../../assets/icons.jsx";

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
            <CalendarDateIcon /> <em>Date:</em> {date}
          </p>
          <p>
            <AlarmIcon /> <em>Time:</em> {time}
          </p>
          <p>
            <PeopleIcon /> <em>Guests:</em> {guests}
          </p>
          {occasion && (
            <p>
              <Cake2Icon /> <em>Occasion:</em> {occasion}
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
