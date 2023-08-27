import React from "react";
import "./home.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              new <span>event</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#home" className="navActive">
                  intro
                </Nav.Link>
                <Nav.Link href="#overviewSec">overview</Nav.Link>
                <Nav.Link href="#speakers">speakers</Nav.Link>
                <Nav.Link href="#programs">programs</Nav.Link>
                <Nav.Link href="#register">register</Nav.Link>
                <Nav.Link href="#venue">venue</Nav.Link>
                <Nav.Link href="#sponsors">sponsors</Nav.Link>
                <Nav.Link href="#contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content" id="home">
          <p>July 22 - 26 Fn Fan Francisco, CA</p>
          <h2>web design conference</h2>
          <div className="butt">
            <button>
              <a href="#">learn more</a>
            </button>
            <button>
              <a href="#">register now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
