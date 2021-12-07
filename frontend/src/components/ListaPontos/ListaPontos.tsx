import { useEffect, useState } from "react";
import api from "../../services/api"
import './styles.css'

export function ListaPontos(){
    const [listaPontos, setListaPontos] = useState(['']);

    const getPontos = async() => {

        var userPontos = await api.get(`api/user/`).then((value) => {
            const dataArray = Object.keys(value.data).map(key => value.data[key]);
            dataArray.sort((itemA, itemB) =>  itemA.pontos < itemB.pontos ? 1 : -1);
            return dataArray      
        });
        
        setListaPontos(() => {return userPontos});
    }
    useEffect(() => {
        getPontos();
    }, [])
    
    return (
        <div className="ranking">
            
            <p id="titulo"> Ranking Geral </p>

            <div id="lista-pontos">

                {listaPontos.map((value:any, key:any) => {
                    return (
                        <div className="area-total-lista" key={key}>

                            <div className="area-posicao">
                                {key+1}
                            </div>

                            <div className="area-nome">
                                {value.nome}
                            </div>

                            <div className="area-pontos">
                                {value.pontos}
                            </div>

                        </div>
                        
                    );
                })}
            </div>
        </div>
        
     
        

    )
}