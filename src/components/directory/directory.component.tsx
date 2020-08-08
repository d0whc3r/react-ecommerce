import React from 'react';
import PropTypes from 'prop-types';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { RootState } from '../../redux/root-reducer';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

type DirectoryProps = ReturnType<typeof mapStateToProps>;

const Directory: React.FC<DirectoryProps> = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...menuItemProps }) => (
      <MenuItem key={id} {...menuItemProps} />
    ))}
  </div>
);

Directory.propTypes = {
  sections: PropTypes.array.isRequired
};

interface MapStateToPropsSelector {
  sections: ReturnType<typeof selectSections>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
