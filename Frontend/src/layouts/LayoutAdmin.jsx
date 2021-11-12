import React from "react";
import { Layout } from "antd";
import { Route, Switch, Redirect} from 'react-router-dom';
import AppHeader from "../components/admin/appHeader/Appheader";
import "./css/LayoutAdmin.css";
import MenuSider from "../components/admin/MenuSider";
import FooterAdmin from "../components/admin/footer/footer";
import AdminSignIn from '../views/Admin/Login/SignIn';
import useAuthAdmin from "../hooks/useAuthAdmin";
import InfoAdmin from '../components/admin/appHeader/appHeaderInfoAdmin/InfoAdmin';

export default function LayoutAdmin(props){

    const { routes } = props;
    const { Header, Content, Footer } = Layout;
    const { admin, isLoading } = useAuthAdmin();

    if(!admin && !isLoading){
        return(
            <>
            <Route path="/admin/login" component={AdminSignIn} />
            <Redirect to="/admin/login" />
            </>
            )
    }
   if(admin && !isLoading){
    return(
        <Layout>
            <MenuSider />
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <InfoAdmin />
                    <AppHeader />
                </Header>
                <Content className="layout-admin__content">
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className="layout-admin__footer">
                    <FooterAdmin />
                </Footer>
            </Layout>
        </Layout>
    );
   }
   return null;
}

function LoadRoutes({routes}){
    return(
        <Switch>
            {
                routes.map((route, index) =>(
                    <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component
                    }/>
                ))
            }
        </Switch>
    );
    
}