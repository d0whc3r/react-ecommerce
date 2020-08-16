import React from 'react';
import PropTypes from 'prop-types';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { convertCollectionsSnapshotToMap, DbCollection, firestore, QuerySnapshot } from '../../utils';
import { ShopCollectionFirestore, UpdateCollections } from '../../redux/shop/shop.types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.components';

type ShopPageProps = RouteComponentProps & ReturnType<typeof mapDispatchToProps>;

interface ShopPageState {
  loading: boolean;
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner<any>(CollectionPage);

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = () => {};

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection(DbCollection);

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot as QuerySnapshot<ShopCollectionFirestore>);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  public componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    );
  }

  static propTypes = {
    match: PropTypes.any
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateCollections: (collectionsMap: UpdateCollections['payload']) => dispatch(updateCollections(collectionsMap))
  };
}

export default connect(null, mapDispatchToProps)(ShopPage);
