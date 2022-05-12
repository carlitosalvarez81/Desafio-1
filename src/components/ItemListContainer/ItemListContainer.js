import React from "react";
import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer ({greeting}){
    return (

    <Container classname= "itemList-container"/>
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
