import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Screens/Home/home";
import { Jogo } from "./Screens/Jogo/jogo";
import { Ranking } from "./Screens/Ranking/ranking";
import { Regras } from "./Screens/Regras/regras";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<HomePage />}></Route>
                <Route  path="/jogo" element={<Jogo />}></Route>
                <Route  path="/ranking" element={<Ranking />}></Route>
                <Route  path="/regras" element={<Regras />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;