import React from "react";
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd'
import {HomeOutlined} from '@ant-design/icons'
import { faUtensils, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './MenuSider.css';

export default function MenuSider(){
    const {Sider} = Layout;
    return(
    <Sider className="menu-sider" theme="light">
        <Menu theme="light" mode="inline" defaultSelectedKeys={[1]}>
            <Menu.Item key="1">
                <Link to={"/admin"}>
                <HomeOutlined />
                <span className="nav-text">Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={"/admin/menu-restaurant"}>
                <FontAwesomeIcon icon={faUtensils} />&nbsp;&nbsp;&nbsp; 
                <span className="nav-text">Menú restaurante</span>
                </Link>
            </Menu.Item>
        </Menu>
    </Sider>
    );
}