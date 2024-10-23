import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import People from "@/pages/People";
import RootLayout from "@/pages/RootLayout";
import Tv from "@/pages/Tv";
import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tv",
    element: <Tv />,
  },
  {
    path: "/people",
    element: <People />,
  },
]);

export default routes;
