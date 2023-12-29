import React, {useEffect, useState} from 'react';
import {getAppointments} from "../http/AppointmentAPI";
import {getId} from "../http/userAPI";

const AppointmentSchedule = () => {
    const [doctorId, setDoctorId] = useState('')
    const [array, setArray] = useState('')

    useEffect(() => {
        getId().then(data => {
            getAppointments(data).then(res => setArray(res.data))
        })
    }, [])

    // const listItems = array.map((item) => <li>{item}</li>)
    return (
        <div>
            {/*<listItem/>*/}
        </div>
    );
};

export default AppointmentSchedule;