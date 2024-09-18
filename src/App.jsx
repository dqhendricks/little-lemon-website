import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./features/layout/PageLayout.jsx";
import Homepage from "./features/homepage/Homepage.jsx";

const router = createBrowserRouter([
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
        element: <Homepage />,
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
