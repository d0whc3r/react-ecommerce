import React from 'react';
import PropTypes from 'prop-types';

import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => (
  <div className={['menu-item', size || null].filter(Boolean).join(' ')}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string
};
