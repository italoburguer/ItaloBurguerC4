import React, { useState, useEffect} from "react";
import PresentacionPlatillos from "../../../components/client/appPlatillos/cartaPresentacion/PresentacionPlatillos";
import ListPlatillos from "../../../components/client/appPlatillos/appListPlatillos/listPlatillos";
import { getPlatoApi } from "../../../api/plato";
import {notification, Spin} from "antd";
import HeaderClient from "../../../components/client/appHeader/appHeader";

import "./menu.css";

export default function Menu(){
    const [ platos, setPlatos ] = useState(null);
    const [ count, setCount ] = useState(0);

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
        <div className="Menu__food__container">
          <HeaderClient count={count}/>  
            <div className="menu__food">
                <div className="introduccionPlatillos">
                     <PresentacionPlatillos />
                     {!platos ? (
                <Spin tip="CARGANDO CARTA DE PLATILLOS : )"
                 style={{textAlign:"center",  width: "100%", padding: "20px" }}
                 />
            ) : (
                <div className="container__platillos__menu">
                    <ListPlatillos platos={platos} count={count} setCount={setCount}/>
                </div>
            )}
                </div>{
                    /*
                <div className="PanelCompra">
                 
                </div> */
                }
            </div>
        </div>
    );
}