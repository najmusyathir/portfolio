import { Link } from "react-router-dom";

import src_resume from "../assets/RESUME_MUHAMMAD NAJMU AL SYATHIR BIN AZEMI.pdf";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import './css/NavBar.css';



function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/home" className="font-medium px-3 py-2 text-slate-700 rounded-lg" >Najmu Syathir</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav_hlink">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contacts">Contact Me</Link>
                        <a href={src_resume} download="RESUME_MUHAMMAD NAJMU AL SYATHIR BIN AZEMI.pdf" target="_blank" rel="noopener noreferrer" >
                            <button id="resume">My Resume</button>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;