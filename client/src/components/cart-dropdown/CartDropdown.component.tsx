import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/CartItem.component';
import { ShoppingCartItem } from '../../types/app.types';
import { AppState } from '../../redux';
import './CartDropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

interface StateProps {
  cartItems: ShoppingCartItem[];
}

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem: ShoppingCartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  cartItems: selectCartItems(state),
});

export default connect<StateProps>(mapStateToProps)(CartDropdown);
