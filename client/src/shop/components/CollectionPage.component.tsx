import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCollection } from '../shop.selectors';
import { AppState, Types } from '../../shared';

interface MatchParams {
  collectionId: string;
}

interface OwnProps extends RouteComponentProps<MatchParams> {
  collection: Types.ShopCategory;
}
type Props = OwnProps;

const CollectionPage: React.FC<Props> = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2> {collection.routeName} page</h2>
    </div>
  );
};

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect<{}, {}, OwnProps>(mapStateToProps)(CollectionPage);
