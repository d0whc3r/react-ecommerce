import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectAreCollectionsFetching } from '../../redux/shop/shop.selectors';
import CollectionsOverview from './collections-overview.component';
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.components';
import { RootState } from '../../redux/root-reducer';
import { compose } from 'redux';

interface MapStateToPropsSelector {
  isLoading: ReturnType<typeof selectAreCollectionsFetching>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  isLoading: selectAreCollectionsFetching
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
const CollectionsOverviewContainer = compose<React.FC>(connect(mapStateToProps), WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
