

const CartItem = ({ stock, name, quantity, price, img, onRemove }) => {
  const handleRemove = () => {
    onRemove();
  };

  return (
    <div className="CartItem">
      <div className="infocart">
      <h4 className="nombre">{name}</h4>
      <h3 className="cantidad">Cantidad: {quantity}</h3>
      <h3 className="precio">Precio: ${price}</h3>
      <p className="stock">Stock: {stock}</p>
      
    <div>
      <button onClick={handleRemove} className="botoneliminar">Eliminar Producto</button>
    </div></div></div>
  );
};

export default CartItem;
