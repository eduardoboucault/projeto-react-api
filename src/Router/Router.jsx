import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";

//* Responsabilidades do Router: Direcionar rotas dos componentes;

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
