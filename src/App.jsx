import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./PageLayout.jsx";
import Homepage from "./features/homepage/Homepage.jsx";
import BookingPage from "./features/bookingpage/BookingPage.jsx";
import BookingConfirmed from "./features/bookingpage/BookingConfirmed.jsx";

const router = createBrowserRouter(
  [
    {
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <Homepage />,
        },
        {
          path: "/menu",
          element: <Homepage />,
        },
        {
          path: "/reservations",
          element: <BookingPage />,
        },
        {
          path: "/reservation-confirmed",
          element: <BookingConfirmed />,
        },
        {
          path: "/order",
          element: <Homepage />,
        },
        {
          path: "/login",
          element: <Homepage />,
        },
      ],
    },
  ],
  { basename: "/capstone" }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
