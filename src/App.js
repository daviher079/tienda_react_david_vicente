import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import Inicio from './pages/Inicio';
import InicioCategoria from './pages/InicioCategoria';

function App() {


  return(

<Router>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route path="/categoria/:name" element={<InicioCategoria></InicioCategoria>} />
          
         
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    </Router>


  )
}

export default App;
