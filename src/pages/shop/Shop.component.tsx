import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import { ShopPageState as State } from './Shop.types';
import SHOP_DATA from './Shop.data';

class ShopPage extends Component<{}, State> {
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
