import React, {useState, useEffect} from "react";
import {List, Button, Modal as Modalantd, notification} from "antd"
import DragSortableList from "react-drag-sortable";
import  Modal  from "../../../../components/admin/Modal/";
import { getPlatoApi } from "../../../../api/plato";
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                content: <Plato plato={plato} />
            });
        });
        setListPlatos(listPlatosArray);
    }, [plato]);

    const onSort = (sortedList, dropEvent) => {
        console.log(sortedList);
    }

    return(
        <div className="platos-list">
            <div className="plato-list__header">
                <Button type="primary">
                    Agregar platillo&nbsp;&nbsp;<FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            <div className="plato-list__items">
                {listPlatos.length === 0 && (
                    <h2>No tienes platillos agregados</h2>
                )}
                <DragSortableList items={listPlatos} onSort={onSort} type="vertical"/>
            </div>
        </div>
    );
}

function Plato(props){
    const {plato} = props;
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
    }, [plato]);
    
    if(!plato){
        return null;
    };

    

    return (
        <List.Item
          actions={[
            <Button className="ListButton" type="primary">
                <FontAwesomeIcon icon={faEdit}/>
            </Button>
            ,
            <Button className="ListButton" type="danger">
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
                width: "100px", 
                marginRight: "20px",
                height: "76px"
            }}
          />
          <List.Item.Meta
            title={plato.nombre}
            description={plato.descripcion}
          />
        </List.Item>
      );
}