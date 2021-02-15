import React from 'react';
import '../styles/CartItem.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div>
      <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-detail">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x €{price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
