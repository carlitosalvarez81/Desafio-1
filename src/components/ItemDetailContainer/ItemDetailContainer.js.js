import React from "react";


export default function ItemDetailContainer ({item}){
    const {item, setItem} = React.useState ([])
    const getItem = new Promise ((resolve, reject) => {
        resolve ()
    }) .then (( ) => { 
        console.log ("getItem")
    })
}
