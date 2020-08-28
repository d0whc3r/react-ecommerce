import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../provider/cart.provider';
import { ShopCollectionItem } from '../../redux/shop/shop.types';

interface CollectionItemProps {
  item: ShopCollectionItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.any
};

export default CollectionItem;
