import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.jsx";
import Modal from "./pages/Modal.jsx";

import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:idImage",
        element: <Modal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
