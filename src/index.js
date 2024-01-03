import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroList from "./components/HeroList/HeroList";
import RandomHeroes from "./components/RandomHeroes/RandomHeroes";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

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
        element: <HeroList />,
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
