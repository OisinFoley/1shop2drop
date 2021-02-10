import React, { FC } from 'react';
import { ShoppingCartItem } from '../../types/app.types';
import './CheckoutItem.styles.scss';

interface Props {
  cartItem: ShoppingCartItem;
}

const CheckoutItem: FC<Props> = ({
  cartItem: { name, imageUrl, price, quantity },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
