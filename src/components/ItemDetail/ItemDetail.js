import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'


const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
            img: product.img

        }

        addItem(item, quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'> {product.name}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {product.category}
                </p>
                <p className='Info'>
                    Descripcion: {product.description}
                </p>
                <p className='Info'>
                    Precio: ${product.price}
                </p>
                <p className='Info'>
                    Stock: {product.stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option1'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
        
        
    )
}

export default ItemDetail
