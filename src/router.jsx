import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Testimonials from "./pages/Testimonials";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Login from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
