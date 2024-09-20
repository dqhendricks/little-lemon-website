import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button.jsx";

const bookingSchema = Yup.object().shape({
  date: Yup.date()
    .min(new Date(), "The date must be today or later")
    .required("Date required"),
  time: Yup.string().required("Time required"),
  guests: Yup.number()
    .min(1, "You must have at least one guest")
    .max(10, "We have a maximum of 10 guests")
    .required("Number of guests required"),
  occasion: Yup.string(),
});

const initialValues = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
};

function getValidationClass(message, isTouched) {
  if (!isTouched) return null;
  return message ? "isInvalid" : "isValid";
}

function BookingForm({ availableTimes, dispatch, submitAPI }) {
  const navigate = useNavigate();

  function submitHandler(values) {
    const response = submitAPI(values);
    if (response) navigate("/reservation-confirmed", { state: values });
  }

  const handleDateChange = (setFieldValue) => (event) => {
    const date = event.target.value;
    setFieldValue("date", date);
    dispatch({ type: "UPDATE_DATE", payload: new Date(date) });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingSchema}
      onSubmit={submitHandler}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="container" aria-label="Booking options">
          <div className={getValidationClass(errors.date, touched.date)}>
            <label htmlFor="date">Choose date*</label>
            <Field
              name="date"
              type="date"
              id="date"
              onChange={handleDateChange(setFieldValue)}
            />
            <p className="validationMessage">{errors.date}</p>
          </div>
          <div className={getValidationClass(errors.time, touched.time)}>
            <label htmlFor="time">Choose time*</label>
            <Field as="select" name="time" id="time">
              <option />
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </Field>
            <p className="validationMessage">{errors.time}</p>
          </div>
          <div className={getValidationClass(errors.guests, touched.guests)}>
            <label htmlFor="guests">Number of guests*</label>
            <Field type="number" name="guests" id="guests" />
            <p className="validationMessage">{errors.guests}</p>
          </div>
          <div>
            <label htmlFor="occasion">Occasion (optional)</label>
            <Field as="select" name="occasion" id="occasion">
              <option />
              <option>Birthday</option>
              <option>Anniversary</option>
            </Field>
          </div>
          <div className="buttons">
            <Button type="submit" variant="primary">
              Book Reservation
            </Button>
            <Button type="button" variant="light" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

BookingForm.propTypes = {
  availableTimes: PropTypes.array,
  dispatch: PropTypes.func,
  submitAPI: PropTypes.func,
};

export default BookingForm;
