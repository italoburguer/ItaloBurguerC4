import React from "react";
import { Layout } from "antd";
import { Route, Switch} from 'react-router-dom';
import HeaderClient from "../components/client/appHeader/appHeader"

import "../layouts/css/LayoutClient.css";

export default function LayoutClient(props){
    
    const {Footer} = Layout;
    const {routes} = props;

    return(
        <Layout>
            <Layout>
                <HeaderClient />
                <section className="sectionClient">
                    <LoadRoutes routes={routes} />
                </section>
                <Footer>
                    <p>ITALO BURGUER 2021</p>
                </Footer>
            </Layout>
        </Layout>
    );
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