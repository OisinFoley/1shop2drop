import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CustomButton, AppState, Types } from '../../shared';
import { selectCartItems, toggleCartHidden, CartItem } from '../';
import '../styles/CartDropdown.styles.scss';

interface StateProps {
  cartItems: Types.ShoppingCartItem[];
}

interface DispatchProps {
  dispatch: Dispatch<ReturnType<typeof toggleCartHidden>>;
}

type Props = Readonly<RouteComponentProps & StateProps & DispatchProps>;

const CartDropdown: FC<Props> = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem: Types.ShoppingCartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  cartItems: selectCartItems,
});

export default withRouter(connect<StateProps>(mapStateToProps)(CartDropdown));
