import React from 'react';
import PropTypes from 'prop-types';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.components';
import { createStructuredSelector } from 'reselect';
import { selectAreCollectionsFetching } from '../../redux/shop/shop.selectors';
import { RootState } from '../../redux/root-reducer';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { ThunkDispatch } from 'redux-thunk';
import { ShopActionTypes } from '../../redux/shop/shop.types';

type ShopPageProps = RouteComponentProps & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

interface ShopPageState {
  loading: boolean;
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner<any>(CollectionPage);

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  state = {
    loading: true
  };

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={isFetching} {...props} />} />
      </div>
    );
  }

  static propTypes = {
    match: PropTypes.any
  };
}

interface MapStateToPropsSelector {
  isFetching: ReturnType<typeof selectAreCollectionsFetching>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  isFetching: selectAreCollectionsFetching
});

function mapDispatchToProps(dispatch: ThunkDispatch<RootState, never, ShopActionTypes>) {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
