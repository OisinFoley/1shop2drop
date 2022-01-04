import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { CollectionPreview } from '../';
import { selectCollections } from '../shop.selectors';
import { AppState, Types } from '../../shared';
import { connect } from 'react-redux';

interface StateProps {
  collections: Types.ShopCategory[];
}

const ShopPage: FC<StateProps> = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  collections: selectCollections,
});

export default connect<StateProps>(mapStateToProps)(ShopPage);
