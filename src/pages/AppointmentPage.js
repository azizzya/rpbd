import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {fetchMedicine} from "../http/medicineAPI";
import {Context} from "../index";
import {fetchProcedure} from "../http/procedureAPI";
import {fetchIllness} from "../http/illnessAPI";
import CreateAppointment from "../components/CreateAppointment";

const AppointmentPage = () => {
    const {appointment} = useContext(Context)

    useEffect(() => {
        fetchMedicine().then(data => appointment.setMedicine(data))
        fetchProcedure().then(data => appointment.setProcedure(data))
        fetchIllness().then(data => appointment.setIllness(data))
    }, [])

    return (
        <div>
            <CreateAppointment/>
        </div>
    );
};

export default AppointmentPage;