import React, { FC } from 'react';
import './CollectionItem.styles.scss';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionItem: FC<Props> = ({ id, name, price, imageUrl }) => {
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
    </div>
  );
};

export default CollectionItem;
