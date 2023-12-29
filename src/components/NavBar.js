import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {getRole} from "../http/userAPI";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    getRole().then((result) => {
        user.setRole(result)
    }).catch(e => e)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={MAIN_ROUTE} style={{textDecoration: "none", color: "white"}}>MAIN</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: "white"}}>
                        {user.role === 'ADMIN' ?
                            <Button
                                variant={"outline-light"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                           :
                           ''
                        }
                        <Button
                            variant={"outline-light"} className="ms-3"
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;