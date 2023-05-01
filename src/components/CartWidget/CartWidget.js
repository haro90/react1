import carro from './assets/shopping-cart-3_icon-icons.com_63429.svg';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = ()  => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='./cart' className='CartWidget'>
            <img src={carro} alt="carro-widget" className='carrito'/> 
            { totalQuantity }
        </Link>
    )
}

export default CartWidget
