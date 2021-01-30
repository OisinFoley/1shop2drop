import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.styles.scss';
import ShoppingIcon from '../../../public/assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart';

interface DispatchProps {
  toggleCartHidden: () => void;
}

const CartIcon = ({ toggleCartHidden }: DispatchProps) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleCartHidden,
};

export default connect<null, DispatchProps>(null, mapDispatchToProps)(CartIcon);
