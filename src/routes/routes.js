import {
    CURRENT_USER_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SEARCH_USERS_ROUTE,
    UPDATE_CURRENT_USER_ROUTE,
    USER_ID_ROUTE
} from "../utils/consts";
import Auth from "../pages/auth/Auth";
import CurrentUser from "../pages/current_user/CurrentUser";
import User from "../pages/user/User";
import Users from "../pages/users/Users";
import Setting from "../pages/setting/Setting";

export const authRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]


export const hipstaRoutes = [
    {
        path: CURRENT_USER_ROUTE,
        Component: CurrentUser
    },
    {
        path: SEARCH_USERS_ROUTE,
        Component: Users
    },
    {
        path: USER_ID_ROUTE+'/:id',
        Component: User
    },
    {
        path: UPDATE_CURRENT_USER_ROUTE,
        Component: Setting
    },
]