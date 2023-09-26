import React from 'react'
import useState from 'react'
import useEffect from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))
   
    const increase = () => {
        setCount(count + 1)
    };

    const decrease = () => {
        setCount(count - 1)
    };

    useEffect(() => {
        setCount(parseInt(initial))
    },[initial])

    return (
        <div> <h2>Contador</h2>
            <button disabled={count <= 1} onClick={decrease}>resta</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>suma</button>
            <div> 
                <button disabled={stock <=0} onClick={() => onAdd(count)}> Agregar al carro </button>
                </div>
        </div>
    );
}

export default ItemCount