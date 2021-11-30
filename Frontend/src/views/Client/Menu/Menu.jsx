import React, { useState, useEffect} from "react";
import PresentacionPlatillos from "../../../components/client/appPlatillos/cartaPresentacion/PresentacionPlatillos";
import ListPlatillos from "../../../components/client/appPlatillos/appListPlatillos/listPlatillos";
import { getPlatoApi } from "../../../api/plato";
import {notification, Spin, Modal} from "antd";
import HeaderClient from "../../../components/client/appHeader/appHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./menu.css";
import { getAccessTokenUserApi } from "../../../api/authUser";
import { addCarritoApi } from "../../../api/carrito";

export default function Menu(){
    const [ platos, setPlatos ] = useState(null);
    const [ count, setCount ] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const [cartData, setCartData] = useState();

    const addCarrito = e =>{
        e.preventDefault();      
        const accessTokenUser = getAccessTokenUserApi();

        addCarritoApi(accessTokenUser,cartData).then(response => {
            const typeNotification = response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
                message: response.message
            });
            setCartData({}); 
        }).catch(()=>{
            notification["error"]({
                message: "Error Mensaje"
            });
        });
    }


    const itemPrice = cartItems.reduce((a, c) => a + c.precio * c.qty, 0);
    const iva = itemPrice * 0.19;
    const totalPago = itemPrice + iva;

    const onAdd = (plato) =>{
        const exits = cartItems.find(x => x._id === plato._id);
        if(exits){
            setCartItems(cartItems.map(x => x._id === plato._id ? {...exits,qty: exits.qty + 1} : x
                )
            );
        }else{
            setCartItems([...cartItems, {...plato, qty: 1}]);
        }
    }

    const onRemove = ( plato ) => {
        
        const exist = cartItems.find((x) => x._id === plato._id);
        if(exist.qty === 1){
        setCartItems(cartItems.filter((x) => x._id !== plato._id));
        }else{
            setCartItems(
                cartItems.map((x) => 
                x._id === plato._id ? {...exist, qty: exist.qty - 1} : x
            ));
        }
    };

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

    function test(){
        return("")
    }

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
                    <ListPlatillos onAdd={onAdd} platos={platos} count={count} setCount={setCount}/>
                </div>
            )}
                </div>
            </div>
            <>
            <Modal onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} title="ORDEN DE HAMBURGUESAS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
            style={{top:"0",marginTop:"85px", }}> 
             
               <div>
                   <div className="cleanOrder">
                       {cartItems.length !== 0 && <button onClick={()=> console.log("click")}><FontAwesomeIcon style={{margin:"auto auto"}} icon={faTrash}/></button>}
                   </div>
                   <div className="ContainerOrden" 
                   style={{
                     overflowY: "scroll",
                     maxHeight: "275px",
                     padding:" 5px 20px 0 20px",
                    }}>
                        <div className="carritoVacio">
                            {cartItems.length === 0 && <div className="carritoVacio__title">No tienes ninguna hamburguesa agregada al carrito, presiona "Añadir al carrito" sobre cualquier hamburguesa o bedida y continua.</div>}
                        </div>
                  {cartItems.map((item) => (
                      <div key={item._id} style={{marginTop:"2px"}} className="containeritem">
                          <div className="containeritem__imagen">
                              <img src={item.imagen} alt="Item imagen" />
                          </div>
                          <div className="containeritem__text">
                              <div className="containeritem__title">{item.nombre}</div>
           
                          <div className="containeritem__buttons">
                              <button onClick={()=>onAdd(item) & setCount(count+1)}>+</button>
                              <button onClick={()=>onRemove(item) & setCount(count-1)}>-</button>
                          </div>
                          <div>
                       <div className="containeritem__cantidad-precio">
                           {item.qty} x $/{item.precio}
                       </div>
                          </div>
                          </div>
                          
                      </div>
                  ))}  
               </div>
               {cartItems.length !== 0 && (
                    <>
                      <div className="containerValor">
                          <div className="containerValorText">
                          <div>Valor total: $/{itemPrice.toFixed(2)}</div>
                          <div>Iva: $/{iva.toFixed(2)}</div>
                          <div>
                          <span style={{fontWeight:"bold"}}>Total a pagar: $/{totalPago.toFixed(2)}</span></div>
                          </div>
                      </div>
                    </>
                  )}
               </div>
            </Modal>
            </>
        </div>
    );
}
