import React, { FC } from 'react';
import { connect } from 'react-redux';
import ShoppingIcon from '../../../public/assets/shopping-bag.svg';
import { toggleCartHidden, selectCartItemsCount } from '../../redux/cart';
import { AppState } from '../../redux';
import './CartIcon.styles.scss';

interface DispatchProps {
  toggleCartHidden: () => void;
}

interface StateProps {
  itemCount: number;
}

type Props = Readonly<StateProps & DispatchProps>;

const CartIcon: FC<Props> = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = {
  toggleCartHidden,
};

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
