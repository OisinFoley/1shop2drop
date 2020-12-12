import React, { FC } from 'react';
import CollectionItem from '../collection-item/CollectionItem.component';
import { ShopItem } from '../../pages/shop/Shop.types';
import './CollectionPreview.styles.scss';

interface Props {
  title: string;
  items: ShopItem[];
}

const CollectionPreview: FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map((item: ShopItem) => {
        return <CollectionItem key={item.id} {...item} />;
      })}
    </div>
  </div>
);

export default CollectionPreview;
