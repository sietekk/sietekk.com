'use strict'

import React from 'react';

export default class NavTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-tile">
        {this.props.children}
      </div>
    );
  }
}

