const CartItem = ({ id, name, quantity, price,}) => {
  return (
    <div className="CartItem">
  
      <h4>Nombre:{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};

export default CartItem;
