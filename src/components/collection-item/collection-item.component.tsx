import React from 'react';

import './collection-item.styles.scss';
import { ShopCollectionItems } from '../../pages/shop/shop.types';

interface CollectionItemProps extends ShopCollectionItems {}

const CollectionItem: React.FC<CollectionItemProps> = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
