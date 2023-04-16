import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.js'
import Logo from './assets/logo.png'
const NavBar = () =>{
    return(
        <nav className='nav'>
          <Link to='/'> 
          <img src={Logo} alt="Logo" className='logo'/>
          </Link> 
           <h3 className='nombre'>Tienda oficial Biobest</h3>
            <div>
                <NavLink to={'category/ControlBiologico'} className={({ isActive})=> isActive ? 'ActiveOption' : 'Option'}> Control Biologico</NavLink>
                <NavLink to={'category/Polinizacion'} className={({ isActive})=> isActive ? 'ActiveOption' : 'Option'}> Polinizacion</NavLink> 
                <NavLink to={'category/Trampas'} className={({ isActive})=> isActive ? 'ActiveOption' : 'Option'}> Trampas Adhesivas</NavLink>
            </div>
        <CartWidget className='carrito'/>
        </nav>
        
    )
}
export default NavBar 