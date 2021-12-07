import React, {useEffect, useState} from "react";
import { NavBarCustom } from "../../components/NavBar/NavBar";
import './styles.css';
import { Button, Form  } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';


export function HomePage() {
    const navigate = useNavigate();

    const[nome, setNome] = useState<string>('');

    const handleChange = (event: any) => {
        setNome(() => {return event.target.value});
    }

   const handleSubmit = (event:any) => {
       if (nome === ''){          
        //campo do nome vazio
       }
       else{
            localStorage.setItem('Usuario', nome);
            navigate("/jogo");
       }
    };

    useEffect(()=>{},[])

    return (
        <div className="mainHome"> 
            <div>
                <NavBarCustom/>
            </div>
            <div className="bem-vindo">
                <p id="msg">Bem vindo ao</p>
                <p id="nome-jogo">ZUMBIS WARS</p>
            </div>
            <div className="quadrado">
                <div className="div-form" >
                <Form>
                    <Form.Group controlId="validationCustom03">
                        <Form.Control maxLength={15} onChange={handleChange} type="text" placeholder="Nome do Jogador" required />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="div-button">
                    <Button id="login" size="lg" type="submit" onClick={handleSubmit}  >Iniciar jogo</Button>
                </div>
                    </Form>
                </div>
                
            </div>
        </div>
    );
}