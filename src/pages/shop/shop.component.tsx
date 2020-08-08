import React from 'react';
import PropTypes from 'prop-types';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

type ShopPageProps = RouteComponentProps;

const ShopPage: React.FC<ShopPageProps> = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

ShopPage.propTypes = {
  match: PropTypes.any
};

export default ShopPage;
