import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ShopItem, ShoppingCartItem } from '../../types/app.types';
import { addItem, removeItem, clearCartItem } from '../../redux/cart';
import './CheckoutItem.styles.scss';

interface DispatchProps {
  addItem: (cartItem: ShopItem) => void;
  removeItem: (cartItem: ShopItem) => void;
  clearCartItem: (cartItem: ShopItem) => void;
}

interface OwnProps {
  cartItem: ShoppingCartItem;
}

type Props = Readonly<DispatchProps & OwnProps>;

const CheckoutItem: FC<Props> = ({
  cartItem,
  addItem,
  clearCartItem,
  removeItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
  removeItem,
  clearCartItem,
};

export default connect<null, DispatchProps>(
  null,
  mapDispatchToProps
)(CheckoutItem);
