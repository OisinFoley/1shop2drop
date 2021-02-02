import React from 'react';
import './CartDropdown.styles.scss';
import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/CartItem.component';
import { connect } from 'react-redux';
import { ShoppingCartItem } from '../../types/app.types';

interface StateProps {
  cartItems: ShoppingCartItem;
}

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItems.item} item={cartItem} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }): StateProps => ({
  cartItems,
});

export default connect<StateProps>(mapStateToProps)(CartDropdown);
