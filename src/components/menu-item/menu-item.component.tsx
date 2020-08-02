import React from 'react';
import PropTypes from 'prop-types';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

interface MenuItemProps extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

class MenuItem extends React.Component<MenuItemProps, any> {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
    linkUrl: PropTypes.string.isRequired
  };

  render() {
    const { title, imageUrl, size, history, match, linkUrl } = this.props;
    return (
      <div className={['menu-item', size || null].filter(Boolean).join(' ')} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

export default withRouter(MenuItem);
