import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <CartProvider>
        <NavBar className='NavBar'/>
        <Routes>
         <Route path='/react1' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={ <ItemListContainer/>}/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          </CartProvider>
      </BrowserRouter>
      <Footer />
    </div>
    
  );
  
}

export default App;