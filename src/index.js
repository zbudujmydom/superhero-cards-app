import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroesList from "./components/HeroesList/HeroesList.jsx";
import RandomHeroes from "./components/RandomHeroes/RandomHeroes";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import HeroDetails from "./components/HeroDetails/HeroDetails.jsx";

const router = createBrowserRouter([
  {
    path: `*`,
    element: <ErrorPage />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <RandomHeroes />,
      },
      {
        path: "/heroes-list",
        element: <HeroesList />,
      },
      {
        path: "/heroes/:heroId",
        element: <HeroDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
