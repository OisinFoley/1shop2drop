import React, { Component } from 'react';
import { SHOP_DATA, CollectionPreview } from '../';
import { Types } from '../../shared';

interface State {
  collections: Types.ShopCategory[];
}

class ShopPage extends Component<{}, State> {
  private readonly collections: Types.ShopCategory[];
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
