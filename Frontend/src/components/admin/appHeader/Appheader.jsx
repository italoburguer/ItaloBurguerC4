import React from "react";
import { Button } from "antd";
import IBLogo from "../../../assets/img/png/Logo.png";
import { logout } from "../../../api/auth";
import { LogoutOutlined} from '@ant-design/icons'
import "./AppHeader.css"
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppHeader(){

    const logoutAdmin = () =>{
        logout();
        window.location.reload();
    };

    console.log("");

    return(
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__logo"
                    src={IBLogo}
                    alt=""
                />
                <Button className="" type="link">
                    ITALO BURGUER&nbsp;&nbsp;<FontAwesomeIcon icon={faHamburger} />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button className="logout" type="link"
                onClick={logoutAdmin}
                icon={<LogoutOutlined />}>
                    Cerrar Sesión    
                </Button>
            </div>
        </div>
    );
}