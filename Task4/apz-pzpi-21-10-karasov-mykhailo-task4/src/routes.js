import {AUTH_PAGE_PATH, MAIN_PAGE_PATH, REGISTRATION_PAGE_PATH} from "./utils/consts";
import AuthPage from "./pages/AuthPage";
import RegistrationPage from "./pages/RegistrationPage";
import MainPage from "./pages/MainPage";

const defaultRoutes = [
    {
        path: AUTH_PAGE_PATH,
        Element: AuthPage
    },
    {
        path: REGISTRATION_PAGE_PATH,
        Element: RegistrationPage
    },
    {
        path: MAIN_PAGE_PATH,
        Element: MainPage
    }
];

export default defaultRoutes;