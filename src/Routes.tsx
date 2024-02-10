import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Post from "./components/DetailPage/Post";
import Error from "./components/Error/Error";
import Layout from "./Layout";
import { Loader as DetailLoader } from "./components/DetailPage/Loader";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/detail/:id",
        loader: DetailLoader,
        element: <Post />,
      },
    ],
    errorElement: <Error />,
  },
]);
