import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className='ListGroup'>
      {products.map((prod) => (
        <Item key={`${prod.id}_${prod.category}`} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
