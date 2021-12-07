import React from "react";
import { ListaPontos } from "../../components/ListaPontos/ListaPontos";
import { NavBarCustom } from "../../components/NavBar/NavBar"
import './styles.css'

export function Ranking(){
    
    return (
        <div className="mainRanking">
            <div>
                <NavBarCustom/>
            </div>
            
            <div>
                <ListaPontos/>
            </div>
        </div>
        
    )
}