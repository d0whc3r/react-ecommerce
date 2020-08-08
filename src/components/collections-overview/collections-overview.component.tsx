import React from 'react';

import './collections-overview.styles.scss';

import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import PropTypes from 'prop-types';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/root-reducer';

type CollectionsOverviewProps = ReturnType<typeof mapStateToProps>;

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired
};

interface MapStateToPropsSelector {
  collections: ReturnType<typeof selectCollections>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
