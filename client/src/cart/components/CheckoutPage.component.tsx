import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppState, Types } from '../../shared';
import { selectCartItems, selectCartTotalCost, CheckoutItem } from '../';
import '../styles/CheckoutPage.styles.scss';

interface StateProps {
  cartItems: Types.ShoppingCartItem[];
  total: number;
}

type Props = Readonly<StateProps>;

const CheckoutPage: FC<Props> = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: Types.ShoppingCartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: €{total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  cartItems: selectCartItems,
  total: selectCartTotalCost,
});

export default connect<StateProps, {}, {}, AppState>(mapStateToProps)(
  CheckoutPage
);
