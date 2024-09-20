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
  const headingElement = screen.getByText(/choose date/i);
  expect(headingElement).toBeInTheDocument();
});

test("Form will not submit when invalid", async () => {
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
  const submitButton = screen.getByText(/book reservation/i);
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
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeInput = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);

  await userEvent.type(dateInput, "2999-09-15");
  await userEvent.selectOptions(timeInput, "18:00");
  await userEvent.type(guestsInput, "4");

  // click submit
  const submitButton = screen.getByText(/book reservation/i);
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

test("Form fields have proper types", () => {
  render(
    <BookingForm availableTimes={[]} dispatch={() => {}} submitAPI={() => {}} />
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("type", "date");

  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("type", "number");
});

test("Date field's invalid/valid indications work properly", async () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      submitAPI={() => {}}
    />
  );

  // validate required
  const dateInput = screen.getByLabelText(/choose date/i);
  await userEvent.click(dateInput);
  await userEvent.tab();
  const errorMessage = screen.getByText(/date required/i);
  expect(errorMessage).toBeInTheDocument();
  // validate date is not in past
  await userEvent.type(dateInput, "2000-01-01");
  expect(errorMessage).toHaveTextContent(/date must be today or later/i);
  // no error message if valid
  await userEvent.clear(dateInput);
  await userEvent.type(dateInput, "2999-01-01");
  expect(errorMessage).toHaveTextContent("");
});

test("Time field's invalid/valid indications work properlyv", async () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      submitAPI={() => {}}
    />
  );

  // time validations
  const timeInput = screen.getByLabelText(/choose time/i);
  await userEvent.click(timeInput);
  await userEvent.tab();
  const errorMessage = screen.getByText(/time required/i);
  expect(errorMessage).toBeInTheDocument();
  await userEvent.selectOptions(timeInput, "18:00");
  expect(errorMessage).toHaveTextContent("");
});

test("Guests field's invalid/valid indications work properly", async () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      submitAPI={() => {}}
    />
  );

  // guest validations
  const guestsInput = screen.getByLabelText(/number of guests/i);
  await userEvent.click(guestsInput);
  await userEvent.tab();
  const errorMessage = screen.getByText(/guests required/i);
  expect(errorMessage).toBeInTheDocument();
  await userEvent.type(guestsInput, "0");
  expect(errorMessage).toHaveTextContent(/must have at least one guest/i);
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, "20");
  expect(errorMessage).toHaveTextContent(/maximum of 10 guests/i);
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, "5");
  expect(errorMessage).toHaveTextContent("");
});
