import { Col } from "react-bootstrap";
import { ButtonCustom } from "../../components/Button/Button";
import { NavBarCustom } from "../../components/NavBar/NavBar";
import  ataqueImage from  '../../utils/images/ataque.svg';
import  ataqueEspecialImage from  '../../utils/images/ataqueEspecial.svg';
import  curarImage from  '../../utils/images/curar.svg';
import './styles.css';
export function Regras(){
    return (
        <div className="area-total-regras">

            <div className="area-geral">
                <NavBarCustom/>
                <div className="explicacao">
                    <p id="texto-explicacao">
                        Neste jogo de turnos você deve matar para sobreviver! Você e o zumbi possuem 100 pontos de vida, aquele que chegar a 0 pontos de vida primeiro perde!
                    </p>
                    
                </div>
            </div>
            
            <div className="resumo-ataque">
                <Col className="col-logo-texto">
                    <ButtonCustom variant="" image={ataqueImage} />
                    <p id="texto-botao-regras" style={{color: "white"}}>Ataque</p>
                </Col>
                <p id="texto-regras"> Pode ser usado em todos os turnos para causar, aleatoriamente,
                    de 5 a 10 de dano. </p>
                
            </div>

            <div className="resumo-ataque-especial">
                <Col className="col-logo-texto">
                    <ButtonCustom variant="" image={ataqueEspecialImage}  />
                    <p id="texto-botao-regras" style={{color: "white"}}>Ataque Especial</p>
                </Col>
                <p id="texto-regras"> Usado a cada 2 turnos para causar, aleatoriamente,
                    de 10 a 20 de dano. 50% de chance do inimigo perder o turno! </p>

            </div>
            <div className="resumo-curar">
                <Col  className="col-logo-texto">
                    <ButtonCustom variant="" image={curarImage} />
                    <p id="texto-botao-regras" style={{color: "white"}}>Curar</p>
                </Col>
                <p id="texto-regras"> Pode ser usado em todos os turnos para curar, aleatoriamente, de 5 a 15 de vida. </p>

            </div>
            <div className="resumo-desistir">
                <Col id="desistir-regras" sm="3" >
                    <ButtonCustom variant="danger" text="Desistir?" />
                </Col>
                <p id="texto-regras">Aqui você demonstra fraqueza e desiste do jogo.</p>
            </div>
        </div>
    )
}