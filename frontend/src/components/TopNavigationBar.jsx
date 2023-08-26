import React from 'react';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const {topics} = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {topics}
    </div>
  );
};

export default TopNavigation;