import React, {useState, useEffect} from "react";
import {List, Button, Modal as Modalantd, notification} from "antd"
import DragSortableList from "react-drag-sortable";
import  Modal  from "../../../../components/admin/Modal/";
import { getPlatoApi, deletePlatoApi } from "../../../../api/plato";
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAccesTokenApi } from "../../../../api/auth";
import AddEditPlato from "../AddEditPlato/";

import e404 from "../../../../assets/img/png/404.png";
import "./PlatoList.css";

const { confirm } = Modalantd;

export default function PlatoList(props){
    const {plato, setReloadPlato } = props;
    const [listPlatos, setListPlatos ] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    useEffect(()=>{
        const listPlatosArray=[];
        plato.forEach(plato => {
            listPlatosArray.push({
                content: <Plato plato={plato} deletePlato={deletePlato} editPlatoModal={editPlatoModal}/>
            });
        });
        setListPlatos(listPlatosArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plato]);

    const onSort = (sortedList, dropEvent) => {
    };

    const addPlatoModal = () =>{
      setIsVisibleModal(true);
      setModalTitle("Crear nuevo platillo");
      setModalContent(
        <AddEditPlato 
          setIsVisibleModal={setIsVisibleModal}
          setReloadPlato={setReloadPlato}
        />
      );
    };

    const editPlatoModal = plato => {
      setIsVisibleModal(true);
      setModalTitle("Actualizar platillo");
      setModalContent(
        <AddEditPlato 
          setIsVisibleModal={setIsVisibleModal}
          setReloadPlato={setReloadPlato}
          plato={plato}
        />
      );
    };

    const deletePlato = plato =>{{
      const accesToken = getAccesTokenApi();

      confirm({
        title: "Eliminando plato",
        content: `¿Estas seguro que quieres eliminar el plato ${plato.nombre}?`,
        okText: "Eliminar",
        okType: "danger",
        cancelText: "Cancelar",
        onOk(){
          deletePlatoApi(accesToken, plato._id).then(response =>{
            const typeNotification = response.code === 200 ?
            "success" : "warning";
            notification[typeNotification]({
              message: response.message
            });
            setReloadPlato(true);
          }).catch(() =>{
            notification["error"]({
              message: "Error servidor, intentelo mas tarde."
            });
          });
        }
      })
    }}

    return(
        <div className="platos-list">
            <div className="plato-list__header">
                <Button type="primary" onClick={addPlatoModal}>
                    Agregar platillo&nbsp;&nbsp;<FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            <div className="plato-list__items">
                {listPlatos.length === 0 && (
                  <div className="platillosNoEncontrados" style={{textAlign:"center"}}>
                    <h2>No tienes platillos agregados</h2>
                    <img src={e404} alt="Platillos vacios" style={{marginBottom:"10px"}} />
                    <h3>¡¡Agregar tus platillos!!</h3>
                  </div>
                )}
                <DragSortableList items={listPlatos} onSort={onSort} type="vertical"/>
                <Modal
                  title={modalTitle}
                  isVisible={isVisibleModal}
                  setIsVisible={setIsVisibleModal}
                  >
                    {modalContent}
                </Modal>
            </div>
        </div>
    );
}

function Plato(props){
    const {plato, deletePlato, editPlatoModal} = props;
    const [platoData, setPlatoData] = useState(null);

    useEffect(() => {
        getPlatoApi().then(response => {
        if (response.code !== 200) {
          notification["warning"]({
            message: `Error server`
          });
        }
        setPlatoData(response.data);
      });
    },[plato]);
    
    if(!plato){
        return null;
    };

    return (
        <List.Item
          actions={[
            <Button type="primary" onClick={() => editPlatoModal(plato)}>
                <FontAwesomeIcon icon={faEdit}/>
            </Button>
            ,
            <Button type="danger" onClick={() => deletePlato(plato)}>
              <FontAwesomeIcon icon={faTrash}/>
            </Button>
          ]}
          
          style={{
              paddingRight: "12px",
              marginTop: "15px",
              background: "#F8F9F9",
              borderRadius: "10px",
              boxShadow: "1px 1px 5px #b6c9d4"
          }}
        >
          <img
            src={plato.imagen}
            style={{ 
                borderRadius: "20px",
                width: "100px", 
                marginRight: "20px",
                height: "76px"
            }}
          />
          <List.Item.Meta
            title={(plato.nombre)}
            avatar={"$/ "+plato.precio}
            description={plato.descripcion}
          />
        </List.Item>
      );
}