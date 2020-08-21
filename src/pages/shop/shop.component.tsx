import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { ThunkDispatch } from 'redux-thunk';
import { ShopActionTypes } from '../../redux/shop/shop.types';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

type ShopPageProps = RouteComponentProps & ReturnType<typeof mapDispatchToProps>;

const ShopPage: React.FC<ShopPageProps> = ({ match, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.any,
  fetchCollectionsStartAsync: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch: ThunkDispatch<RootState, never, ShopActionTypes>) {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  };
}

export default connect(null, mapDispatchToProps)(ShopPage);
