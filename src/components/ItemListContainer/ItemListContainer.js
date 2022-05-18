import React, { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({}) => {
    const [ listaProductos, setListaProductos ] = useState ([])
const Productos = [
    {id: "01", nombre: "random", descripcion: "cualquiera", Stock: "1"}
    {id: "02", nombre: "random", descripcion: "cualquiera", Stock: "1"}
    {id: "03", nombre: "random", descripcion: "cualquiera", Stock: "1"}
    {id: "04", nombre: "random", descripcion: "cualquiera", Stock: "1"}
]
const traerProd = Promise ((resolve, reject) => {
    let condition= true
    setTimeout (() => {
        if (condition) {
            resolve (Productos)

        } else { 
            reject( "salio mal")
        }
    }, 3000)
})

useEffect(() =>{
    traerProd
    .then ((res)=> setListaProductos ( res))
    .catch ((error) => console.log ("error"))
}[])

    return (
    <Container classname= "itemList-container">
    <Row>
        <Col>
            <h1> CONTENIDO PRINCIPAL </h1>
        </Col>
    </Row>
    <Row>
        <ItemList/>
        <ItemList/>
        <ItemList/>
        <ItemList/>
    </Row> 
    </Container>

    ); 
    
}
