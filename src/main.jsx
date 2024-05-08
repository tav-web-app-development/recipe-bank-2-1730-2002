import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewRecipe from "./Components/NewRecipe.jsx";
import Layout from "./Components/Layout.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/newRecipe",
        element: <NewRecipe />,
      },
    ],
  },
]);