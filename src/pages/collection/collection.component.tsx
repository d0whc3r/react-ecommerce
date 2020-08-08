import React from 'react';
import PropTypes from 'prop-types';

import './collection.styles.scss';

import { RouteComponentProps } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { RootState } from '../../redux/root-reducer';
import { connect } from 'react-redux';
import { ShopCollection } from '../../redux/shop/shop.types';

interface CollectionPageParams {
  collectionId: string;
}

interface CollectionPageProps extends RouteComponentProps<CollectionPageParams> {
  collection?: ShopCollection;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
  return (
    <div className="collection">
      <h2>Collection {collection?.title}</h2>
    </div>
  );
};

CollectionPage.propTypes = {
  collection: PropTypes.any
};

const mapStateToProps = (state: RootState, ownProps: CollectionPageProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
