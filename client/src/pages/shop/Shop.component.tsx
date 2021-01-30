import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import { ShopCategory } from '../../types/app.types';
import SHOP_DATA from './Shop.data';

interface State {
  collections: ShopCategory[];
}

class ShopPage extends Component<{}, State> {
  private readonly collections: ShopCategory[];
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
