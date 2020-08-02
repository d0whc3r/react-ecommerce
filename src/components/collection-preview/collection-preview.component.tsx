import React from 'react';
import PropTypes from 'prop-types';

import './collection-preview.styles.scss';
import { ShopCollectionItems } from '../../pages/shop/shop.types';
import CollectionItem from '../collection-item/collection-item.component';

interface CollectionPreviewProps {
  title: string;
  items: ShopCollectionItems[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map(({ ...itemProps }) => (
          <CollectionItem key={itemProps.id} {...itemProps} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default CollectionPreview;
