import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText(/Choose date/);
  expect(headingElement).toBeInTheDocument();
});
