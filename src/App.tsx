import "./styles/reset.css";
import "./styles/App.css";
import { MainConteiner } from "./styles/styled-components/MainContainer";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <MainConteiner>
      <RouterProvider router={router} />
    </MainConteiner>
  );
}

export default App;
