import PropTypes from 'prop-types';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
    <h1>Beauty world</h1>
    <div className="cart">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">{cartCount}</span>
    </div>
  </header>
  );
};

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
