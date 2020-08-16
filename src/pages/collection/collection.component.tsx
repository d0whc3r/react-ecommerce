import React from 'react';
import PropTypes from 'prop-types';

import './collection.styles.scss';

import { RouteComponentProps } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { RootState } from '../../redux/root-reducer';
import { connect } from 'react-redux';
import { ShopCollection, ShopCollectionCategoriesNames } from '../../redux/shop/shop.types';
import CollectionItem from '../../components/collection-item/collection-item.component';

interface CollectionPageParams {
  collectionId: ShopCollectionCategoriesNames;
}

interface CollectionPageProps extends RouteComponentProps<CollectionPageParams> {
  collection: ShopCollection | null;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
  if (!collection) {
    return (
      <div className="collection-page">
        <h2 className="title" />
      </div>
    );
  }
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
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
