import React, { FC } from 'react';
import { ShopItem } from '../../types/app.types';
import CollectionItem from '../collection-item/CollectionItem.component';
import './CollectionPreview.styles.scss';

interface Props {
  title: string;
  items: ShopItem[];
}

const CollectionPreview: FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item: ShopItem) => {
          return <CollectionItem key={item.id} {...{ item }} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
