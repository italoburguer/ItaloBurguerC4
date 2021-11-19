import React, {useState, useEffect} from "react";
import {Rate, notification, Row, Col} from "antd"
import {getPlatoApi} from "../../../../api/plato"

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
            console.log(response)
        }).catch(() => {
            notification["error"]({
                message: "Error Internal Server"
            });
        });
    });
    return <p>Hola</p>
}
