import CartWidget from '../CartWidget/CartWidget.js'
import Logo from './assets/logo.png'
const NavBar = () =>{
    return(
        <nav className='nav'>
          <img src={Logo} alt="Logo" className='logo'/>
           <h3 className='nombre'>Tienda oficial Biobest</h3>
           <div className='cadena'>
           <div className='cadena1'>
            <button className='boton'>Control Biologico</button>
            </div>
            <div className='cadena2'>
            <button className='boton'>Polinizadores</button>
            </div>
            <div className='cadena3'>
            <button className='boton'>Trampas adhesivas</button>
            </div>
            </div>
            <CartWidget className='carrito'/>
           
        </nav>
        
    )
}
export default NavBar 