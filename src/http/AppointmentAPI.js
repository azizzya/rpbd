import {$authHost, $host} from "./index";

export const createAppointment = async (time, description, next_date, medicineIdStr, illnessStr, proceduresStr, date_from, date_to, patientId, doctorId) => {
    try {
        let prescriptionId = null
        if (medicineIdStr) {
            const prescription = await $authHost.post('api/prescription', {medicineIdStr})
            prescriptionId = prescription.data.prescriptionId
        }
        if (illnessStr) {
            const {sickList} = await $authHost.post('api/sicklist', {illnessStr, date_from, date_to, patientId})
        }
        const {appointment} = await $authHost.post('api/appointment/create', {time, description, next_date, prescriptionId, patientId, doctorId})
        const appointmentId = appointment.id
        if (proceduresStr) {
            const {procedureAppointment} = await $authHost.post('api/procedure-appointment', {proceduresStr, appointmentId})
        }
        return appointment
    } catch (e) {
        console.log(e)
    }
}

export const getAppointments = async (doctorId) => {
    try {
        const appointments = await $authHost.post('api/appointment/get-appointment', {doctorId: doctorId})
        return appointments
    } catch (e) {
        console.log(e)
    }
}