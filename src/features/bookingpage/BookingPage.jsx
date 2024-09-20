import { useReducer } from "react";
import "./bookingpage.css";
import BookingHeader from "./BookingHeader.jsx";
import BookingForm from "./BookingForm.jsx";
import { fetchAPI } from "../../services/api.js";

function updateTimes(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_DATE":
      return fetchAPI(payload);
    default:
      return state;
  }
}

function initializeTimes() {
  const response = fetchAPI(new Date());
  return response;
}

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
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
}

export default BookingPage;
