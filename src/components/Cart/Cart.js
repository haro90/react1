import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice, removeItem } = useContext(
    CartContext
  );

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el Carrito</h1>
        <Link to="/react1" className="Option">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem
          key={p.id}
          stock={p.stock}
          name={p.name}
          quantity={p.quantity}
          price={p.price}
          onRemove={() => removeItem(p.id)}
        />
      ))}
      <h1>Total: ${totalPrice}</h1>
      <button onClick={() => clearCart()} className="Buttonl">
        Limpiar carrito
      </button>
      <div className="botoni">
      <Link to="./Checkout" className="checkout">
        Checkout
      </Link></div>
    </div>
  );
};

export default Cart;
