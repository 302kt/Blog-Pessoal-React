import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Action';
import { UserState } from '../../../store/token/Reducer';
import logo from '../../../../images/logo_blog.png';

const AppNavbar: React.FC = () => {
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        // alert("Usuário deslogado")
        toast.info('Usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        })
        navigate('/login')
    }
    var navbarComponent;
    if (token !== '') {
        navbarComponent =

            <Navbar collapseOnSelect expand="lg" className='nav' variant="dark">
                
                <Link to="/home" className="navbar-brand">
                    <img src={logo} alt="Logo" width="100" height="30" /> {/* Imagem da logo */}

                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto justify-content-start"> {/* Adicionando a classe justify-content-start */}
                        <NavDropdown title="Postagens" id="collasible-nav-dropdown" style={{ color: 'white' }}>
                            <NavDropdown.Item as={Link} to="/formulariopostagem">Cadastrar Postagem</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/postagens">Listar Postagens</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Temas" id="collasible-nav-dropdown" style={{ color: 'white' }}>
                            <NavDropdown.Item as={Link} to="/formulariotema">Cadastrar Tema</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/temas">Listar Temas</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="Social" id="collasible-nav-dropdown" style={{ color: 'white' }}>
                            <NavDropdown.Item as={Link} to="/usuario">Perfil</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={goLogout} >Logout</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    }
    return (
        <>
            {navbarComponent}
        </>
    );
};

export default AppNavbar;