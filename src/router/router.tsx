import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import PetsPage from "../pages/PetsPage";
import CategoriesPage from "../pages/CategoriesPage";
import AddPetPage from "../pages/AddPetPage";
import AddCategoryPage from "../pages/AddCategoryPage";
import PetsInfo from "../pages/PetsInfo";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PetsPage />,
        path: "/",
      },
      {
        element: <PetsInfo />,
        path: "/:petsId",
      },
      {
        element: <CategoriesPage />,
        path: "/categories",
      },
      {
        element: <AddPetPage />,
        path: "/add-pet",
      },
      {
        element: <AddCategoryPage />,
        path: "/add-category",
      },
    ],
  },
]);
