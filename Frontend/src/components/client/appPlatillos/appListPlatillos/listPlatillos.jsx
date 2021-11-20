import React, {useState, useEffect} from "react";
import {Rate, notification, Card, Col} from "antd"
import {getPlatoApi} from "../../../../api/plato"
import "./listPlatillos.css";

export default function ListPlatillos(props){

    const {platos } = props;
    const {Meta} = Card;
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
            <Card
                cover={<img src={plato.imagen} style={{width:"300px",height:"300px"}}/>}
            >
            <Card.Meta 
             title={plato.nombre}

             />
            </Card>
        </div>
    )
}
