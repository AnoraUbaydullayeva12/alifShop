import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search.jsx";
import Cart from "./pages/Card.jsx";
import ProductSection from "./components/Products/ProductSection.jsx";
import Saved from './pages/SavedCards.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,        // show Main component on root '/'
        element: <ProductSection />,
      },
      {
        path: "search/:q",
        element: <Search />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
