import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/img/logo-ferrenova.jpg"; 

function BarraNavegacion({ cantidad = 0, total = 0 }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>
        {/* Marca / Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <img
            src={Logo}
            alt="Logo Ferretería React"
            width="45"
            height="45"
            className="rounded-circle bg-light p-1"
          />
          <span className="fw-bold text-warning fs-5">Ferretería React</span>
        </Navbar.Brand>

        {/* Botón móvil */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Enlaces principales */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productos">
              Productos
            </Nav.Link>
             <Nav.Link as={NavLink} to="/ofertas">
              Ofertas
           </Nav.Link>
           <Nav.Link as={NavLink} to="/categorias">
              Categorías
            </Nav.Link>

            <Nav.Link as={NavLink} to="/nosotros">
              Nosotros
            </Nav.Link>

            {/* 🔗 NUEVA PESTAÑA BLOGS */}
            <Nav.Link as={NavLink} to="/blogs">
              Blogs
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
           


            {/* Carrito */}
            <Nav.Link
              as={NavLink}
              to="/carrito"
              className="d-flex align-items-center gap-1"
            >
              🛒 <span>{cantidad} items</span>
            </Nav.Link>

            {/* Total (solo visible si hay items) */}
            {total > 0 && (
              <span className="text-warning small fw-semibold">
                Total: ${total}
              </span>
            )}

            {/* Cuenta / inicio de sesión */}
            <Nav.Link as={NavLink} to="/iniciar-sesion">
              Cuenta
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
