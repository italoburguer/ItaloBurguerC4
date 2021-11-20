import React, {useState, useEffect} from "react";
import { notification} from "antd"
import {getPlatoApi} from "../../../../api/plato";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./listPlatillos.css";

export default function ListPlatillos(props){

    const {platos } = props;
    return(
        <div className="platos-list">
            {platos.map(plato =>(
                <div key={plato._id} className="platos-list__render">
                    <Plato  plato={plato}/>
                </div>
            ))}
        </div>
    );
      
}

function Plato(props){
    const {plato} = props;
    const [platoInfo, setPlatoInfo] = useState({});

    useEffect(() =>{
        getPlatoApi(plato._id).then(response =>{
           if(response?.code !== 200){
               notification["warning"]({
                   message: response.message
               });
           }else{
               setPlatoInfo(response.plato);
           }
        }).catch(() => {
            notification["error"]({
                message: "Error Internal Server Try Again"
            });
        });
    }, [plato]);

    return (
        <div className="container__platillos">
            <div className="ProductItem">
                <div className="productItemAlign">
                <img src={plato.imagen}
                /> 
                <div className="titleProduct">
                    {plato.nombre} 
                </div>
                <div className="precioProduct">
                    <div>COP $/ {plato.precio}</div>
                    <div className="buttonBuyItem"><button><FontAwesomeIcon icon={faShoppingCart} /> &nbsp;Comprar</button></div>
                </div>
                </div>
            </div>
        </div>
        
    )
}