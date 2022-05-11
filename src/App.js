
import "./App.css";
import { BrowserRouter  } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Inicio from "./pages/Inicio";
import InicioCategoria from "./pages/InicioCategoria";

import Login from "./pages/Login";
import UserContext, { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route
            path="/categoria/:name"
            element={<InicioCategoria></InicioCategoria>}
          />
          <Route path="/Login" element={<Login />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
     
  );
}

export default App;
