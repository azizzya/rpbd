import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateIllness from "../components/modals/CreateIllness";
import CreateProcedure from "../components/modals/CreateProcedure";
import CreateMedicine from "../components/modals/CreateMedicine";

const Admin = () => {
    const [medicineVisible, setMedicineVisible] = useState(false)
    const [illnessVisible, setIllnessVisible] = useState(false)
    const [procedureVisible, setProcedureVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setMedicineVisible(true)}
            >
                Добавить лекарство
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setIllnessVisible(true)}
            >
                Добавить болезни
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProcedureVisible(true)}
            >
                Добавить процедуру
            </Button>
            <CreateMedicine show={medicineVisible} onHide={() => setMedicineVisible(false)}/>
            <CreateIllness show={illnessVisible} onHide={() => setIllnessVisible(false)}/>
            <CreateProcedure show={procedureVisible} onHide={() => setProcedureVisible(false)}/>
        </Container>
    );
};

export default Admin;