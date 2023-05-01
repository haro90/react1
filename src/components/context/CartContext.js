import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [], totalQuantity: 0, totalPrice: 0 });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prev) => prev + quantity);
    } else {
      console.error("el producto ya fue agregado");
    }
  };
  const removeItem = (itemId) => {
    const item = cart.find((prod) => prod.id === itemId);
    if (item) {
      const quantity = item.quantity;
      const cartUpdated = cart.filter((prod) => prod.id !== itemId);
      setCart(cartUpdated);
      setTotalQuantity((prev) => prev - quantity);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
