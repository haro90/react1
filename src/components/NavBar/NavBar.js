import CartWidget from '../CartWidget/CartWidget.js'
import Logo from './assets/logo.png'
const NavBar = () =>{
    return(
        <nav>
          <img src={Logo} alt="Logo"/>
           <h3>Tienda oficial Biobest</h3>
           <div>
            <button>Control Biologico</button>
            <button>Polinizadores</button>
            <button>Trampas adhesivas</button>
            </div>
            <CartWidget/>
           
        </nav>
        
    )
}
export default NavBar 