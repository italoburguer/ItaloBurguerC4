import React from "react";
import { Layout } from "antd";
import { Route, Switch} from 'react-router-dom';
import AppHeader from "../components/admin/appHeader/Appheader";
import "./css/LayoutAdmin.css";
import MenuSider from "../components/admin/MenuSider";

export default function LayoutAdmin(props){

    const { routes } = props;
    const {Header, Content, Footer} = Layout;
    return(
        <Layout>
            <MenuSider/>
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <AppHeader/>
                </Header>
                <Content className="layout-admin__content">
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className="layout-admin__footer">
                    2021 ITALO BURGUER
                </Footer>
            </Layout>
        </Layout>
    )
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