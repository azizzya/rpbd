import React from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {APPOINTMENT_ROUTE, SCHEDULE_ROUTE} from "../utils/consts";

const Main = observer(() => {
    const navigate = useNavigate();

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <div>
                <Button
                    variant={"outline-primary"}
                    className="me-3"
                    onClick={() => navigate(SCHEDULE_ROUTE)}
                >
                    Расписание записей
                </Button>
                <Button
                    variant={"outline-success"}
                    className="ms-3"
                    onClick={() => navigate(APPOINTMENT_ROUTE)}
                >
                    Создать запись
                </Button>
            </div>
        </Container>
    );
});

export default Main;