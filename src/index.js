import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HeroesList from "./components/HeroesList/HeroesList.jsx";
// import RandomHeroes from "./components/RandomHeroes/RandomHeroes";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
// import HeroDetails from "./components/HeroDetails/HeroDetails.jsx";

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
        element: <div>glowna</div>,
      },
      {
        path: "/heroes-list",
        element: <div>lista</div>,
      },
      {
        path: "/heroes/:id",
        element: <div>details</div>,
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
