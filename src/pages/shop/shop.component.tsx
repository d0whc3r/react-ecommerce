import React from 'react';
import PropTypes from 'prop-types';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { RootState } from '../../redux/root-reducer';
import { connect } from 'react-redux';

type ShopPageProps = ReturnType<typeof mapStateToProps>;

const ShopPage: React.FC<ShopPageProps> = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

ShopPage.propTypes = {
  collections: PropTypes.array.isRequired
};

interface MapStateToPropsSelector {
  collections: ReturnType<typeof selectCollections>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
