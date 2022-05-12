import {Card, Button} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import ItemCountfrom from "../ItemCount/ItemCount"

export default function ItemList (){
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>PRODUCTO</Card.Title>
        <Card.Text> Some quick example text to build on the card title and make up the bulk of
the card's content.
        </Card.Text>
        <ItemCount/>
    </Card.Body>
</Card>
    )
}
