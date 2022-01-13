import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CollectionPreview } from '..';
import { AppState, Types } from '../../shared';
import { selectCollections } from '../shop.selectors';
import '../styles/CollectionsOverview.styles.scss';

interface StateProps {
  collections: Types.ShopCategory[];
}

const CollectionsOverview: React.FC<StateProps> = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  collections: selectCollections,
});

export default connect<StateProps, {}, {}, AppState>(mapStateToProps)(
  CollectionsOverview
);
