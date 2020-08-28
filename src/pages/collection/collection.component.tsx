import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './collection.styles.scss';

import { RouteComponentProps } from 'react-router-dom';
import { ShopCollection, ShopCollectionCategoriesNames } from '../../redux/shop/shop.types';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from '../../contexts/collections/collections.context';

interface CollectionPageParams {
  collectionId: ShopCollectionCategoriesNames;
}

interface CollectionPageProps extends RouteComponentProps<CollectionPageParams> {
  collection: ShopCollection | null;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
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
  collection: PropTypes.any,
  match: PropTypes.any
};

export default CollectionPage;
