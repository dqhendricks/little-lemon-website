import { useReducer } from "react";
import "./bookingpage.css";
import BookingHeader from "./BookingHeader.jsx";
import BookingForm from "./BookingForm.jsx";
import { submitAPI } from "../../services/api.js";
import { initializeTimes, updateTimes } from "./availableTimesReducer.js";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  return (
    <section className="booking-page">
      <BookingHeader availableTimes={availableTimes} />
      <div className="row">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitAPI={submitAPI}
        />
      </div>
    </section>
  );
}

export default BookingPage;
