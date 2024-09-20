import PropTypes from "prop-types";

function BookingHeader({ availableTimes }) {
  return (
    <header>
      <div className="row">
        <div>
          <h2>Book Reservation</h2>
          <h3>Choose your options below</h3>
        </div>
        <div className="available-times">
          <p>Available times:</p>
          {availableTimes.map((time) => (
            <p key={time}>{time}</p>
          ))}
        </div>
      </div>
    </header>
  );
}

BookingHeader.propTypes = {
  availableTimes: PropTypes.array,
};

export default BookingHeader;
