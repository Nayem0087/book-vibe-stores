import { createBrowserRouter } from "react-router";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Books from "../../pages/Homepage/Books/Books";
import Homepage from "../../pages/Homepage/Homepage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: '/books',
        element: <Books/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);