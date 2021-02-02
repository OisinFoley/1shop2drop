import React, { FC } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton.component';
import { addItem } from '../../redux/cart';
import { ShopItem } from '../../types/app.types';
import './CollectionItem.styles.scss';

interface OwnProps {
  item: ShopItem;
}

interface DispatchProps {
  addItem: (item: ShopItem) => void;
}

type Props = Readonly<DispatchProps & OwnProps>;

const CollectionItem: FC<Props> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect<null, DispatchProps>(
  null,
  mapDispatchToProps
)(CollectionItem);
