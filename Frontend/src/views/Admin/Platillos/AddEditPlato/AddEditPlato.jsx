import React, {useState, useEffect} from "react";
import {Form, Input, Button, notification} from "antd";
import {getAccesTokenApi} from "../../../../api/auth"
import { faUtensils, faDollarSign, faInfoCircle, faImage, faKey} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addPlatoApi, updatePlatoApi } from "../../../../api/plato"

import "./AddEditPlato.css";

export default function AddEditPlato(props){

    const { setIsVisibleModal, setReloadPlato, plato} = props;
    const [platoData, setPlatoData] = useState({});

    useEffect(()=>{
        plato ? setPlatoData(plato) : setPlatoData({});
    }, [plato]);

    const addPlato = e =>{
        e.preventDefault();
        const accessToken = getAccesTokenApi();

        if(!platoData.nombre || !platoData.precio || !platoData.descripcion || !platoData.imagen){
            notification["error"]({
            message: "Todos los campos son obligatorios"
            });
        }else{
        addPlatoApi(accessToken, platoData).then(response => {
            const typeNotification = response.code === 200 ? "success": "warnig";
            notification[typeNotification]({
                message: response.message
            });

            setIsVisibleModal(false);
            setReloadPlato(true);
            setPlatoData({});
            
        }).catch(() =>{
            notification["error"]({
                message: "Error del servidor, intentelo más tarde."
            });
        });
    }
};

    const updatePlato = e =>{
        e.preventDefault();
        const accessToken = getAccesTokenApi();
        updatePlatoApi(accessToken, plato._id, platoData).then(response => {
            const typeNotification= response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
                message: response.message
            });
            setIsVisibleModal(false);
            setReloadPlato(true);
            setPlatoData({});
        }).catch(() => {
            notification["error"]({
                message: "Error del servidor, intentalo mas tarde"
            });
        });
    }

    return(
        <div className="add-edit-plato">
            <AddEditForm 
            plato={plato} 
            addPlato={addPlato} 
            updatePlato={updatePlato} 
            setPlatoData={setPlatoData}
            platoData={platoData}
            />
        </div>
    );
}

function AddEditForm(props){
    const { plato, addPlato, updatePlato, setPlatoData, platoData} = props;

    return(
        <form className="formEditAddPlato" onSubmit={plato ? updatePlato : addPlato}>
            <Form.Item>
                <Input
                  prefix={<FontAwesomeIcon icon={faUtensils}/>}
                  placeholder="Nombre del platillo"
                  value={platoData.nombre}
                  onChange={e => setPlatoData({ ...platoData, nombre: e.target.value})}
                  >
                </Input>
            </Form.Item>
            <Form.Item>
                <Input
                  type="number"
                  prefix={<FontAwesomeIcon icon={faDollarSign}/>}
                  placeholder="Precio del platillo (no agregue puntos ni comas)"
                  value={platoData.precio}
                  onChange={e => setPlatoData({ ...platoData, precio: e.target.value})}
                  >
                </Input>
            </Form.Item>
            <Form.Item>
                <Input
                  prefix={<FontAwesomeIcon icon={faInfoCircle}/>}
                  placeholder="Descripcion del platillo"
                  value={platoData.descripcion}
                  onChange={e => setPlatoData({ ...platoData, descripcion: e.target.value})}
                  >
                </Input>
            </Form.Item>
            <Form.Item>
                <Input
                  prefix={<FontAwesomeIcon icon={faImage}/>}
                  placeholder="Imagen del plato (Link de la imagen)"
                  value={platoData.imagen}
                  onChange={e => setPlatoData({ ...platoData, imagen: e.target.value})}
                  >
                </Input>
            </Form.Item>
            <Form.Item hidden={!plato}>
                <Input
                  prefix={<FontAwesomeIcon icon={faKey}/>}
                  placeholder="id del platillo (generado automaticamente)"
                  disabled
                  value={"_id: "+platoData._id}
                  onChange={e => setPlatoData({ ...platoData, id: e.target.value})}
                  >
                </Input>
            </Form.Item>
            <Form.Item>
                <div className="addEditButtonCenter">
                <button className="addEditButton" type="submit">{plato ? "Actualizar plato" : "Crear plato"}</button>
                </div>
            </Form.Item>
        </form>
    )
}