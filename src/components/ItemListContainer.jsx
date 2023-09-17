import React from 'react'
import ItemCount from './ItemCount.'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {

    const productos= [
        {id: 1, name: "Producto A", price: 100, stock: 10},
        {id: 2, name: "Producto B", price: 200, stock: 20},
        {id: 3, name: "Producto C", price: 300, stock: 30},
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout (() => {
                resolve(productos)
            },500)
        }else{
            reject("No se puede mostrar los productos"
            )
        }
    })

    mostrarProductos
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error)=>{
            console.log(error)
        })

 

    const onAdd = (quantity) => {
        console.log(`Total de ${quantity} unidades`)
        alert(`Se agrego al Carrito ${quantity} Unidades`)
    }

    return(
        <>

        <div>{greeting}</div>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemList productos/>

        </>
    )

}
export default ItemListContainer