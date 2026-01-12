import { NavLink, Outlet } from "react-router-dom";
import { Header } from "../styles/styled-components/Header";
import { Navigation } from "../styles/styled-components/Navigation";

const Layout = () => {
  return (
    <>
      <Header>
        <h1>🐾 Pet Shop Admin Panel</h1>
        <p>Manage your pets and categories with elegance</p>
      </Header>
      <Navigation>
        <NavLink to={"/"}>Pets</NavLink>
        <NavLink to={"/categories"}>Categories</NavLink>
        <NavLink to={"/add-pet"}>Add Pet</NavLink>
        <NavLink to={"/add-category"}>Add Category</NavLink>
      </Navigation>
      <Outlet />
    </>
  );
};

export default Layout;
