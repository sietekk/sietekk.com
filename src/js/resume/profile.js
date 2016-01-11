'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';
import Tile from '../widget/tile';
import Line from '../widget/line';

export default class Profile extends React.Component {

  render() {

    let data = this.props.data;

    return (
      <Tile>
        <div>
          <Image className="center-img" src={data.picture} circle />
          <h4 className="center-text">{data.name} </h4>
          <div className="center-text">{data.label}</div>
        </div>
        <Line />
        <p className="center-text">
          {data.summary}
        </p>
        <Line />
        <ul className="list-unstyled text-center">
          <li>
            <span className="fa fa-lg fa-location-arrow icon-padding" />
            {data.location.region}, {data.location.countryCode}
          </li>
          <li>
            <span className="fa fa-lg fa-envelope icon-padding" />
            <a href="mailto:{data.email}">{data.email}</a>
          </li>
        </ul>
        <Line />
        <ul className="list-inline text-center">
          <li>
            <span className="fa fa-lg fa-github icon-padding" />
            <a href={data.profiles[0].url}>{data.profiles[0].network}</a>
          </li>
          <li>
            <span className="fa fa-lg fa-linkedin icon-padding" />
            <a href={data.profiles[1].url}>{data.profiles[1].network}</a>
          </li>
        </ul>
      </Tile>
    );
  }

}
