import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Error from "./components/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
  },
]);

const root = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
