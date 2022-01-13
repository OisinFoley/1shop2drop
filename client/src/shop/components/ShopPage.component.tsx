import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionsOverview from './CollectionsOverview.component';
import CollectionPage from './CollectionPage.component';
interface MatchParams {
  path: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const ShopPage: FC<MatchProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
