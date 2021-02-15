import React, { FC } from 'react';
import { Types } from '../../shared';
import { CollectionItem } from '../';
import '../styles/CollectionPreview.styles.scss';

interface Props {
  title: string;
  items: Types.ShopItem[];
}

const CollectionPreview: FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item: Types.ShopItem) => {
          return <CollectionItem key={item.id} {...{ item }} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
