import PropTypes from 'prop-types';
import Product from './Product.jsx';

const ProductList = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
  const products = [
    { id: 1, name: 'Eyeshadow', description: '20% off', image: 'https://images.pexels.com/photos/2639947/pexels-photo-2639947.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Compact powder', description: '25% off', image: 'https://images.pexels.com/photos/2732197/pexels-photo-2732197.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, name: 'lipstick', description: 'Buy 2 get 1 free', image: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, name: 'Highlighter', description: '50% off', image: 'https://images.pexels.com/photos/1722868/pexels-photo-1722868.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, name: 'lipliner', description: '10% off', image: 'https://images.pexels.com/photos/2535928/pexels-photo-2535928.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, name: 'Mascara', description: '25% off', image: 'https://images.pexels.com/photos/2637820/pexels-photo-2637820.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          isInCart={cart.some((item) => item.id === product.id)}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default ProductList;
