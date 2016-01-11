'use strict';

import React from 'react';
import {Label} from 'react-bootstrap';
import Tile from '../widget/tile';
import Line from '../widget/line';

export default class Skills extends React.Component {

  render() {

    let data = this.props.data;

    let skills = data.map(
      (skill, index) =>
        <Skill
          key={index}
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords}
        />
    );

    return (
      <Tile>
        <h4 className="center-text">Skills</h4>
        <Line />
        {skills}
      </Tile>
    );
  }
}

class Skill extends React.Component {

  render() {

    let keywords = this.props.keywords.map(
      (keyword, index) =>
        <Label
          key={index}
          bsStyle="info"
          className="skill-btn-margin"
        >
          {keyword}
        </Label>
    );

    return (
      <div>
        <h5>{this.props.name} - {this.props.level}</h5>
        {keywords}
      </div>
    );
  }
}
