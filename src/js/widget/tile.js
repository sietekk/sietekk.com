'use strict'

import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tile">
        {this.props.children}
      </div>
    );
  }
}
