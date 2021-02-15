import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ShoppingIcon from '../../../public/assets/shopping-bag.svg';
import { toggleCartHidden, selectCartItemsCount } from '../';
import { AppState } from '../../shared';
import '../styles/CartIcon.styles.scss';

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

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = {
  toggleCartHidden,
};

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
