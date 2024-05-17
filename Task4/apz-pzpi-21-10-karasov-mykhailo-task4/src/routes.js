import {
    ACTIVITIES_LIST_PAGE, ACTIVITY_PAGE, ADD_ACTIVITY_PAGE,
    ADD_COMPANY, ADD_WORKER_ITEM_PAGE, ADD_WORKER_PAGE, ADMIN_PAGE,
    AUTH_PAGE_PATH, COMPANY_SCANNERS, COMPANY_WORKER_ITEM_PAGE,
    MAIN_PAGE_PATH, ONE_SCANNER_PAGE,
    PROFILE_PAGE_PATH,
    REGISTRATION_PAGE_PATH,
    SUCCESS_SUBSCRIBE, WORKER_PAGE
} from "./utils/consts";
import AuthPage from "./pages/AuthPage";
import RegistrationPage from "./pages/RegistrationPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import SubscribeSuccess from "./pages/SubscribeSuccess";
import AddCompanyPage from "./pages/AddCompanyPage";
import WorkersPage from "./pages/WorkersPage";
import AddWorkerPage from "./pages/AddWorkerPage";
import AddWorkerItemPage from "./pages/AddWorkerItemPage";
import WorkerItemPage from "./pages/WorkerItemPage";
import ScannersPage from "./pages/ScannersPage";
import OneScannerPage from "./pages/OneScannerPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import AddActivityPage from "./pages/AddActivityPage";
import ActivityPage from "./pages/ActivityPage";
import AdminPage from "./pages/AdminPage";

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

export const authRoutes = [
    {
        path: PROFILE_PAGE_PATH,
        Element: ProfilePage
    },
    {
        path: SUCCESS_SUBSCRIBE,
        Element: SubscribeSuccess
    },
    {
        path: ADD_COMPANY,
        Element: AddCompanyPage
    },
    {
        path: WORKER_PAGE,
        Element: WorkersPage
    },
    {
        path: ADD_WORKER_PAGE,
        Element: AddWorkerPage
    },
    {
        path: ADD_WORKER_ITEM_PAGE,
        Element: AddWorkerItemPage
    },
    {
        path: COMPANY_WORKER_ITEM_PAGE,
        Element: WorkerItemPage
    },
    {
      path: COMPANY_SCANNERS,
      Element: ScannersPage
    },
    {
        path: ONE_SCANNER_PAGE,
        Element: OneScannerPage
    },
    {
        path: ACTIVITIES_LIST_PAGE,
        Element: ActivitiesPage
    },
    {
        path: ADD_ACTIVITY_PAGE,
        Element: AddActivityPage
    },
    {
        path: ACTIVITY_PAGE,
        Element: ActivityPage
    },
    {
        path: ADMIN_PAGE,
        Element: AdminPage
    }
];

export default defaultRoutes;