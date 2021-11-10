//LAYOUTS ADMIN Y CLIENTE
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutClient from "../layouts/LayoutClient";
//VIEWS ADMIN
import AdminHome from "../views/Admin";
import AdminSignIn from "../views/Admin/Login/SignIn";
import MenuFood from "../views/Admin/MenuFood/MenuFood";
import Error404 from "../views/Error404";
//VIEWS CLIENT
import Home from "../views/Client/Home";
import LoginUser from "../views/Client/Login/SignIn"
import Menu from "../views/Client/Menu/Menu";
import SignUp from "../views/Client/Register/SignUp";

const routes = [
    {
        path: "/admin", 
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true
            },
            {   path: "/admin/menu-restaurant",
                component: MenuFood,
                exact: true
            },
            {
                component: Error404,
            }
        ]
    },
    {
        path:"/",
        component: LayoutClient,
        exact:false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true 
            },
            {
                path: "/login",
                component: LoginUser,
                exact: true
            },
            {
                path: "/signup",
                component: SignUp,
                exact: true
            },
            {
                path: "/menu",
                component: Menu,
                exact: true
            },
            {
                component: Error404,
            },
        ]
    }
];

export default routes;