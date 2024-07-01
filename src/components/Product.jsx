import PropTypes from 'prop-types';

const Product = ({ product, isInCart, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isInCart: PropTypes.bool.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Product;
