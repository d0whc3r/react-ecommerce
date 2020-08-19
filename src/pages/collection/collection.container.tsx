import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { RootState } from '../../redux/root-reducer';
import WithSpinner from '../../components/with-spinner/with-spinner.components';
import CollectionPage from './collection.component';

interface MapStateToPropsSelector {
  isLoading: ReturnType<typeof selectIsCollectionsLoaded>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose<React.FC>(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
