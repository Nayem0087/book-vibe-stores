import { createBrowserRouter } from "react-router";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Books from "../../pages/Homepage/Books/Books";
import Homepage from "../../pages/Homepage/Homepage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import BookDetails from "../../pages/BookDetails/BookDetails";

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
      },
      {
        path: '/bookDetails/:bookId',
        Component: BookDetails,
        loader: () => fetch('/booksData.json')
      }
    ],
    errorElement: <ErrorPage/>
  },
]);