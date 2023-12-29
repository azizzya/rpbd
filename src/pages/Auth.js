import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, FormControl} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {
    DOCTOR_LOGIN_ROUTE,
    DOCTOR_REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE
} from "../utils/consts";
import {login, loginDoctor, registration, registrationDoctor} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE || location.pathname === DOCTOR_LOGIN_ROUTE;
    const isDoctor = location.pathname === DOCTOR_LOGIN_ROUTE || location.pathname === DOCTOR_REGISTRATION_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password, fName, sName)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    const clickDoctor = async () => {
        try {
            let data;
            if (isLogin) {
                data = await loginDoctor(email, password)
            } else {
                data = await registrationDoctor(email, password, fName, sName)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">
                    {isLogin ?
                        isDoctor ? 'Авторизация доктор' : 'Авторизация'
                        :
                        isDoctor ? 'Регистрация доктор' : 'Регистрация'
                    }
                </h2>
                <Form className="d-flex flex-column">
                    {isLogin ?
                        ''
                        :
                        <FormControl
                            className="mt-4"
                            placeholder="Имя"
                            value={fName}
                            onChange={e => setFName(e.target.value)}
                        />
                    }
                    {isLogin ?
                        ''
                        :
                        <FormControl
                            className="mt-3"
                            placeholder="Фамилия"
                            value={sName}
                            onChange={e => setSName(e.target.value)}
                        />
                    }
                    <FormControl
                        className="mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <div className="d-flex justify-content-between mt-4">
                        {isLogin ?
                            <div>
                                {"Нет аккаунта? "}
                                {isDoctor ?
                                    <NavLink to={DOCTOR_REGISTRATION_ROUTE}>Зарегистрируейтесь!</NavLink>
                                    :
                                    <NavLink to={REGISTRATION_ROUTE}>Зарегистрируейтесь!</NavLink>
                                }
                            </div>
                            :
                            <div>
                                {"Есть аккаунта? "}
                                {isDoctor ?
                                    <NavLink to={DOCTOR_LOGIN_ROUTE}>Войдите!</NavLink>
                                    :
                                    <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                }
                            </div>
                        }
                        {isDoctor ?
                            <Button
                                variant={"outline-dark"}
                                onClick={clickDoctor}
                            >
                                {isLogin ? 'Войти' : 'Регстрация'}
                            </Button>
                            :
                            <Button
                                variant={"outline-dark"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регстрация'}
                            </Button>
                        }
                    </div>
                    <div>
                        {isDoctor?
                            <NavLink to={LOGIN_ROUTE}>Авторизоваться как пациент</NavLink>
                            :
                            <NavLink to={DOCTOR_LOGIN_ROUTE}>Авторизоваться как доктор</NavLink>
                        }
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;