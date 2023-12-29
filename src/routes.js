import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    APPOINTMENT_ROUTE,
    DOCTOR_LOGIN_ROUTE, DOCTOR_REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE, SCHEDULE_ROUTE
} from "./utils/consts";
import AppointmentPage from "./pages/AppointmentPage";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import AppointmentSchedule from "./components/AppointmentSchedule";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: APPOINTMENT_ROUTE,
        Component: AppointmentPage
    },
    {
        path: SCHEDULE_ROUTE,
        Component: AppointmentSchedule
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DOCTOR_LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: DOCTOR_REGISTRATION_ROUTE,
        Component: Auth
    }
]