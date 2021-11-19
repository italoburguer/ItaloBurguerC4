import React, { useState, useEffect} from "react";
import PresentacionPlatillos from "../../../components/client/appPlatillos/cartaPresentacion/PresentacionPlatillos";
import ListPlatillos from "../../../components/client/appPlatillos/appListPlatillos/listPlatillos";
import { getPlatoApi } from "../../../api/plato";
import {notification, Spin} from "antd";

import "./menu.css";

export default function Menu(){
    const [ platos, setPlatos ] = useState(null);

    useEffect(() => {
        getPlatoApi().then(response =>{
            if(response?.code !== 200){
                notification["warning"]({
                    message: response.message
                });
            }else{
               setPlatos(response.plato)
            }
        }).catch(() =>{
            notification["error"]({
                message: "Server Error"
            })
        });
    }, []);

    return(
        <div className="menu__food">
            <PresentacionPlatillos />

            {!platos ? (
                <Spin tip="CARGANDO CARTA DE PLATILLOS : )"
                 style={{textAlign:"center",  width: "100%", padding: "20px" }}
                 />
            ) : (
                <ListPlatillos platos={platos} />
            )}
            
        </div>
    );
}