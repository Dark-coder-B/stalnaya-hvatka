import React, { Component }  from 'react'

import { Button, Container, FormControl, Navbar, Form, Nav } from 'react-bootstrap'
import logo from './logo.jpg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky='top' collapseOnSelect expand="md" bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height="40"
                                width="40"
                                className="d-inline-block aline-top"
                                alt="logo"
                            /> Стальная хватка 03
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/about"> Виды сварки </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                                <Nav.Link href="/blog"> Блог </Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="about" element={<About/>} />
                        <Route path="contacts" element={<Contacts/>} />
                        <Route path="blog" element={<Blog/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}
