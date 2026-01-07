import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AdminLayout from "./components/admin/AdminLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Testimonials from "./pages/Testimonials";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery"; // Add this
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

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
        path: "gallery", // Add this route
        element: <Gallery />,
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
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
]);
