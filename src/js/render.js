'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default function render(element, domElement, callback) {
  let elementInstance = React.createElement(element);
  return ReactDOM.render(elementInstance, domElement, callback);
}
