import React from 'react';
import PropTypes from 'prop-types';

import './collection-preview.styles.scss';
import { ShopCollectionItem } from '../../pages/shop/shop.types';
import CollectionItem from '../collection-item/collection-item.component';

interface CollectionPreviewProps {
  title: string;
  items: ShopCollectionItem[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default CollectionPreview;
