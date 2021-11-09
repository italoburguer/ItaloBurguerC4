import LayoutAdmin from "../layouts/LayoutAdmin";
import AdminHome from "../views/Admin";
import AdminSignIn from "../views/Admin/Login/SignIn";
import MenuFood from "../views/MenuFood";
import Error404 from "../views/Error404";

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
    }
];

export default routes;