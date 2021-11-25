import React, { useState, useEffect} from "react";
import PresentacionPlatillos from "../../../components/client/appPlatillos/cartaPresentacion/PresentacionPlatillos";
import ListPlatillos from "../../../components/client/appPlatillos/appListPlatillos/listPlatillos";
import { getPlatoApi } from "../../../api/plato";
import {notification, Spin, Modal} from "antd";
import HeaderClient from "../../../components/client/appHeader/appHeader";

import "./menu.css";

export default function Menu(){
    const [ platos, setPlatos ] = useState(null);
    const [ count, setCount ] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
      };

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
          <HeaderClient count={count} showModal={showModal}/>  
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
                </div>
            </div>
            <>
            <Modal title="ORDEN DE HAMBURGUESAS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="ContainerOrden" style={{
                    width:"100%",
                     height:"20", 
                     }}>
                    <div className="itemOrden"style={{display:"flex"}}>
                        <div className="itemImagen"><img alt="ImagenItem"/></div>
                        <div className="itemNombre" style={{marginLeft:"30px"}}>NOMBRE ITEM</div>
                        <div className="itemPrecio" style={{marginLeft:"30px"}}>PRECIO</div>
                    </div>
                </div>
            </Modal>
            </>
        </div>
    );
}