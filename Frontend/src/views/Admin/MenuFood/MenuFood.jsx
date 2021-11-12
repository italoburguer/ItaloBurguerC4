import React, {useState, useEffect} from "react";
import PlatoList from "../../Admin/Platillos/PlatoList/PlatoList";
import  { getPlatoApi } from "../../../api/plato";

import "./MenuFood.css";

export default function MenuFood(){

    const [plato, setPlato] = useState([]);
    const [reloadPlato, setReloadPlatos] = useState(false);

    useEffect(() => {
        getPlatoApi().then(response =>{
            setPlato(response.plato)
        });
        setReloadPlatos(false);
    }, [reloadPlato]);

    return (
       <div className="menu-restaurantAdmin">
           <PlatoList plato={plato} setReloadPlato={setReloadPlatos}></PlatoList>
       </div>
    )
}