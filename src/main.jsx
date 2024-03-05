import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.jsx";
import Modal from "./pages/Modal.jsx";

import "aos/dist/aos.css";

import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <ToastContainer
      toastStyle={{ background: "#3c88c4", color: "white" }}
      icon={false}
      hideProgressBar={true}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
