import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, FormControl} from "react-bootstrap";
import {createAppointment} from "../http/AppointmentAPI";
import {getId} from "../http/userAPI";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";


const CreateAppointment = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [patientId, setPatientId] = useState('');
    const [date, setDate] = useState('');
    const [nextDate, setNextDate] = useState('');
    const [medicines, setMedicines] = useState('');
    const [illness, setIllness] = useState('');
    const [procedures, setProcedures] = useState('');
    const [description, setDescription] = useState('');
    const [date_from, setDate_from] = useState('');
    const [date_to, setDate_to] = useState('');
    const [doctorId, setDoctorId] = useState('')

    useEffect(() => {
        getId().then(data => {
            setDoctorId(data)
        })
    }, [])
    user.setId(doctorId)

    const click = async () => {
        try {
            const appointment = await createAppointment(date, description, nextDate, medicines, illness, procedures, date_from, date_to, patientId, doctorId)
            alert('Запись создана')
            navigate(MAIN_ROUTE)
        } catch (e) {

        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center my-4">
            <Card style={{width: 800}} className="p-5">
                <h2 className="m-auto">Создать запись</h2>
                <Form>
                    <FormControl
                        placeholder="ID пациента"
                        className="mt-4"
                        value={patientId}
                        onChange={e => setPatientId(e.target.value)}
                    />
                    <FormControl
                        placeholder="Дата приема"
                        className="mt-3"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    <FormControl
                        placeholder="Дата следующего приема"
                        className="mt-3"
                        type="date"
                        value={nextDate}
                        onChange={e => setNextDate(e.target.value)}
                    />
                    <FormControl
                        placeholder="ID лекарств через запятую"
                        className="mt-3"
                        value={medicines}
                        onChange={e => setMedicines(e.target.value)}
                    />
                    <FormControl
                        placeholder="ID болезней через запятую"
                        className="mt-3"
                        value={illness}
                        onChange={e => setIllness(e.target.value)}
                    />
                    <FormControl
                        placeholder="ID процедур через запятую"
                        className="mt-3"
                        value={procedures}
                        onChange={e => setProcedures(e.target.value)}
                    />
                    <FormControl
                        placeholder="Описание приема"
                        className="mt-3"
                        as="textarea"
                        rows={5}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <FormControl
                        placeholder="Дата начала приемного"
                        className="mt-3"
                        type="date"
                        value={date_from}
                        onChange={e => setDate_from(e.target.value)}
                    />
                    <FormControl
                        placeholder="Дата конца больничного"
                        className="mt-3"
                        type="date"
                        value={date_to}
                        onChange={e => setDate_to(e.target.value)}
                    />
                    <div className="mt-4 d-flex justify-content-between">
                        <Button
                            variant={"outline-danger"}
                            onClick={() => navigate(MAIN_ROUTE)}
                        >
                            Закрыть
                        </Button>
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Создать
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default CreateAppointment;