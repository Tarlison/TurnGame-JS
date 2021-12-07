import React from "react";
import { Col} from "react-bootstrap";
import { NavBarCustom } from "../../components/NavBar/NavBar";
import { ButtonCustom } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {getDanoAtaqueBasico, getDanoAtaqueEspecial, getDanoAtaqueBasicoMonstro, getDanoAtaqueEspecialMonstro, getRandomCura} from './randomNumbers';
import heroiImage from '../../utils/images/heroiImage.png';
import monstroImage from '../../utils/images/monstroImage.png';
import  ataqueImage from  '../../utils/images/ataque.svg';
import  ataqueEspecialImage from  '../../utils/images/ataqueEspecial.svg';
import  curarImage from  '../../utils/images/curar.svg';
import api from "../../services/api"
import './styles.css'
import { Personagem } from "../../components/Personagem/Personagem";

export function Jogo(){
 
    const navigate = useNavigate();
    const [rodadasJogadas, setRodadasJogadas] = useState(1);
    const [pontos, setPontos] = useState(0);
    const [turnoHeroi, setTurnoHeroi] = useState(0);
    const [turnoMonstro, setTurnoMonstro] = useState(0);
    const [vidaMonstro, setVidaMonstro] = useState(100);
    const [vidaHeroi, setVidaHeroi] = useState(100);
    const [desitir, setDesitir] = useState(false);
    const [log, setComponents]= useState(['']);
    const [progressBarHeroi, setProgressBarHeroi] = useState('success')
    const [progressBarMonstro, setProgressBarMonstro] = useState('success')
    
    const salvarPontos = async(usuario: any) => {
        await api.post(`api/user/`, usuario);
    }
    useEffect(() => {
        if(vidaHeroi <= 50) setProgressBarHeroi('warning');
        if(vidaHeroi <= 20) setProgressBarHeroi('danger');
        if(vidaMonstro <= 50) setProgressBarMonstro('warning');
        if(vidaMonstro <= 20) setProgressBarMonstro('danger');
        if (vidaHeroi <= 0 || vidaMonstro <= 0 ){
            const data = {
                "nome": localStorage.getItem("Usuario"),
                "pontos": Math.floor(pontos)
            }
            salvarPontos(data); 
            vidaMonstro <= 0 ? alert("Você ganhou") : alert("Você Perdeu")
            navigate("/ranking");
        }
    },
    [vidaHeroi, vidaMonstro, pontos, navigate]
    );
    
    const ataqueBasico = () => {
        if (vidaMonstro > 0) {
            let danoBasico = getDanoAtaqueBasico();
            setVidaMonstro(vidaMonstro - danoBasico < 0 ? 0 : vidaMonstro - danoBasico);
            setTurnoHeroi(turno => {return turno+1});
            setRodadasJogadas(rodada => { return rodada+1});
            setPontos(() => {return (vidaHeroi*1000)/(rodadasJogadas)});
            setComponents(value => {
                return [`Jogador atacou o monstro (${danoBasico})`, ...value ]
            });
            turnoMonstro < 3 ? monstroAtaqueBasico() : monstroAtaqueEspecial();  
        }
    }
    const ataqueEspecial = () => {
        if (vidaMonstro > 0) {
            let dano = getDanoAtaqueEspecial();
            setVidaMonstro(vidaMonstro - dano < 0 ? 0 : vidaMonstro - dano);
            setTurnoHeroi(turno => {return 0});
            setRodadasJogadas(rodada => { return rodada+1});
            setPontos(() => {return (vidaHeroi*1000)/(rodadasJogadas)});
            setComponents(value => {
                return [`Jogador usou golpe especial (${dano})`, ...value ]
            });
            let vaiPerderTurno = Math.floor(Math.random() * (10 - 5 + 1)) + 5 <= 5;
            if (!vaiPerderTurno)
                turnoMonstro < 3 ? monstroAtaqueBasico() : monstroAtaqueEspecial();
            else{                
                setComponents(value => {
                    return [`Monstrou perdeu o turno!`, ...value ]
                });
            }
        }
    }
    const monstroAtaqueBasico = () => {
        if (vidaHeroi > 0){
            let dano = getDanoAtaqueBasicoMonstro();
            setVidaHeroi(vidaHeroi - dano < 0 ? 0 : vidaHeroi - dano);         
            setTurnoMonstro(turnoMonstro+1);
            setComponents(value => {
                return [ `Monstro causou dano (${dano})`, ...value]
            });
            
        }
    }
    const monstroAtaqueEspecial = () => {
        if (vidaHeroi > 0){
            let dano = getDanoAtaqueEspecialMonstro();
            setVidaHeroi(vidaHeroi - dano < 0 ? 0 : vidaHeroi - dano);
            setTurnoMonstro(0);
            setComponents(value => {
                return [ `Monstro causou dano (${dano})`, ...value]
            });
        }
    }
    const curar = () => {
        if (vidaHeroi < 100){
            let cura = getRandomCura();
            setVidaHeroi(()=>{
                return vidaHeroi + cura >= 100 ? 100 : vidaHeroi + cura 
            });
            setTurnoHeroi(turno => {return turno+1});
            setRodadasJogadas(rodada => { return rodada+1});
            setPontos(() => {return (vidaHeroi*1000)/(rodadasJogadas)});
            setComponents(value => {
                return [ `Jogador usou a cura (${cura})`, ...value]
            });
        }
        
    }
    const handleExit = () => {
        navigate('/');
    }
    return (
        
        <div className="area-total">

                <div className="area-combate">                
                    <NavBarCustom />
                    <p id="pontos" style={{color: "#FFFFFF"}}>Pontos: {Math.floor(pontos)}</p>
                    {
                        (desitir) ? 
                            <div className="area-total-alert">
                                <div className="area-alert">
                                    <strong style={{color: "#FFFFFF"}}>
                                    VOCÊ DESEJA DESISTIR?
                                    </strong>
                                </div>
                                <div className="area-sim">
                                    <ButtonCustom text="SIM, SOU FRACO" onClick={handleExit} />
                                </div>
                                <div className="area-nao">
                                    <ButtonCustom text="NÃO, O PAI GUENTA" onClick={() => setDesitir(false)} />
                                </div>
                            </div>
                        :
                        <div className="cenario">

                            <div className="heroi">
                                <Personagem progressBarHeroi={progressBarHeroi} imageSrc={heroiImage} vida={vidaHeroi} widhtImage={130} heightImage={1}/>
                            </div>

                            <div className="monstro">
                                <Personagem progressBarHeroi={progressBarMonstro} imageSrc={monstroImage} vida={vidaMonstro} widhtImage={100} heightImage={100}/>
                            </div>
 
                        </div>
                    }
                </div>
            
            <div className="area-comandos">
                <div className="area-total-comandos">

                    <div className="area-comandos-titulo">
                        <Col  className="d-flex flex-sm-column"  >
                            <p id="texto" style={{color: "#FFFFFF"}}>Ataque</p>
                        </Col>
                    </div>

                    <div className="area-botao-ataque">
                        <Col className="d-flex flex-sm-column"  >
                            <ButtonCustom variant="" image={ataqueImage} onClick={ataqueBasico}/>
                            <p id="texto" style={{color: "#FFFFFF"}}>Ataque</p>
                        </Col>
                    </div>

                    <div className="area-botao-ataque-especial">
                        <Col className="d-flex flex-sm-column"  >
                            <ButtonCustom variant="" image={ataqueEspecialImage} onClick={ataqueEspecial} disabled = { turnoHeroi < 2 ? true : false} />
                            <p id="texto" style={{color: "#FFFFFF"}}>Ataque Especial</p>
                        </Col>
                    </div>

                    <div className="area-botao-curar">
                        <Col className="d-flex flex-sm-column"  >
                            <ButtonCustom variant="" image={curarImage} onClick={curar} />
                            <p id="texto" style={{color: "#FFFFFF"}}>Curar</p>
                        </Col>
                    </div>

                    <div className="area-bota-desistir">
                        <Col id="desistir" sm="3" >
                            <ButtonCustom variant="danger" text="Desistir?" onClick={() => setDesitir(true)} />
                        </Col>
                    </div>

                </div>
            </div>
            <div className="area-logs">
            <div className="area-comandos-titulo">
                  <Col  className="d-flex flex-sm-column"  >
                      <p id="texto" style={{color: "#FFFFFF"}}>Histórico de Batalha</p>
                  </Col>
              </div>
                  
                    <div className="lista">
                    {
                        log.map((element, index)=>{
                            if (element.indexOf('Monstro') > - 1){
                                return (
                                    <Col key = {index} id="monstro-log">{element}</Col>
                                );
                            }
                            else{
                                if (element.indexOf('especial') > - 1){
                                    return (
                                        <Col key = {index} id="heroi-log-especial">{element}</Col>
                                    );
                                }
                                else{
                                    return (
                                        <Col key = {index} id="heroi-log">{element}</Col>
                                    );
                                }
                                
                            }
                            
                        })
                    }
                    </div>

                
            
            </div>

        </div>

    )
}