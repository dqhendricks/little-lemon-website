import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../BookingForm";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

test("Form renders with 'Choose date' field", () => {
  render(
    <BookingForm availableTimes={[]} dispatch={() => {}} submitAPI={() => {}} />
  );
  const headingElement = screen.getByText(/Choose date/i);
  expect(headingElement).toBeInTheDocument();
});

test("Form validation stops submit when invalid", async () => {
  // render the form with the mocked dispatch function
  const mockSubmit = vi.fn();
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={() => {}}
      submitAPI={mockSubmit}
    />
  );

  // click submit
  const submitButton = screen.getByText(/Book Reservation/i);
  await userEvent.click(submitButton);

  // test dispatch function was called with the expected arguments
  expect(mockSubmit).not.toHaveBeenCalled();
});

test("Form can be submitted when valid", async () => {
  // render the form with the mocked dispatch function
  const mockSubmit = vi.fn();
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      submitAPI={mockSubmit}
    />
  );

  // find and fill in the fields by their label text
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeInput = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);

  await userEvent.type(dateInput, "2999-09-15");
  await userEvent.selectOptions(timeInput, "18:00");
  await userEvent.type(guestsInput, "4");

  // click submit
  const submitButton = screen.getByText(/Book Reservation/i);
  await userEvent.click(submitButton);

  // test dispatch function was called with the expected arguments
  expect(mockSubmit).toHaveBeenCalled();
  expect(mockSubmit).toHaveBeenCalledWith({
    date: "2999-09-15",
    time: "18:00",
    guests: 4,
    occasion: "",
  });
});
