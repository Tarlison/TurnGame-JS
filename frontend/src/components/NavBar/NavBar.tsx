import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import logo from '../../utils/images/logo.svg';
import './styles.css';

export function NavBarCustom(){
  const navigate = useNavigate();
  
  
  const handleSubmit = (event:any) => {
    const nome = localStorage.getItem('Usuario');
    if (nome === '' || nome === null){
      alert("É preciso informar o nome do jogador")
      navigate("/");
    }
    else{
         navigate("/jogo");
    }
 };
    return (
        
        <Navbar variant="dark" className="nav" >
          <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="170"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              />
          </Navbar.Brand>
          <Nav className="justify-content-end" id="options">
            <Nav.Link className="nav-links" href="/" >Home</Nav.Link>
            <Nav.Link className="nav-links" onClick={handleSubmit}>Jogar</Nav.Link>
            <Nav.Link className="nav-links" href="/regras">Regras</Nav.Link>
            <Nav.Link className="nav-links" href="/ranking">Ranking</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
    )
}