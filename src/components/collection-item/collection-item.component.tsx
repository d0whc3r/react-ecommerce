import React from 'react';

import './collection-item.styles.scss';
import { ShopCollectionItem } from '../../pages/shop/shop.types';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addItem } from '../../redux/cart/cart.actions';
import { CartAddAction } from '../../redux/cart/cart.types';

interface CollectionItemProps extends ReturnType<typeof mapDispatchToProps> {
  item: ShopCollectionItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addItem: (item: CartAddAction['payload']) => dispatch(addItem(item))
  };
}

export default connect(null, mapDispatchToProps)(CollectionItem);
