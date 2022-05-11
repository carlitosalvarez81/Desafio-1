import React from "react"
export default function ItemCount (){

    const [count, setCount] = React.useState (1)

    const stock = 5

    function onAdd() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function onDecrease() {
        if (count > 1) {
            setCount(count - 1)
        }
    }


    const StockButton = ({handleOnClick, text}) => {
        return (
        <button className= "stock-button" onClick= {handleOnClick} >
            {text}
        </button>
        )
    }

    const AddButton = () => {
        return (
        <button className= "add-button">
        Añadir al Carrito
        </button>
        )
    }

    return (
        <div>
            <StockButton text="-" handleOnClick={onDecrease}/>
            <span className = "add-button-count">{count}</span>
            <StockButton text= "+" handleOnClick={onAdd}/>
            <AddButton/>
        </div>
    )
}