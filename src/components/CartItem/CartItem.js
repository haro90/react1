import React from "react";

const CartItem = ({ stock, name, quantity, price, img, onRemove }) => {
  const handleRemove = () => {
    onRemove();
  };

  return (
    <div className="CartItem">
      <img src={img} alt={name} />

      <h4>Nombre: {name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>

      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;
