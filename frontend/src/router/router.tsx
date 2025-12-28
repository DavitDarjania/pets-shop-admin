import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import PetsPage from "../pages/PetsPage";
import CategoriesPage from "../pages/CategoriesPage";
import AddPetPage from "../pages/AddPetPage";
import AddCategoryPage from "../pages/AddCategoryPage";
import PetsInfo from "../pages/PetsInfo";
import EditPet from "../pages/EditPet";
import EditCategory from "../pages/EditCategory";

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
        element: <EditPet />,
        path: "/edit/:editPetId",
      },
      {
        element: <CategoriesPage />,
        path: "/categories",
      },
      {
        element: <EditCategory />,
        path: "/category/edit/:editCaregoryId",
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
