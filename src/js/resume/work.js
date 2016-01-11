'use strict';

import React from 'react';
import Tile from '../widget/tile';
import Line from '../widget/line';

export default class Work extends React.Component {


  render() {

    let data = this.props.data;

    let lastIndex = data.length - 1;
    let workItems = data.map(
      (workItem, index) =>
        <WorkItem
          key={index}
          company={workItem.company}
          position={workItem.position}
          website={workItem.website}
          startDate={workItem.startDate}
          endDate={workItem.endDate}
          summary={workItem.summary}
          highlights={workItem.highlights}
          showDivider={(index === lastIndex) ? false : true}
        />
    );

    return (
      <Tile>
        <h4 className="center-text">Experience</h4>
        <Line />
        {workItems}
      </Tile>
    );
  }
}

class WorkItem extends React.Component {

  render() {

    let dates = '';
    if (isEmpty(this.props.endDate)) {
      dates = this.props.startDate + ' - Current';
    } else {
      dates = this.props.startDate + ' - ' + this.props.endDate;
    }

    let highlights = this.props.highlights.map(
      (highlight, index) =>
        <Highlight
          key={index}
          highlight={highlight}
        />
    );

    return (
      <div key={this.props.key}>
        <div className="heading-container">
          <div className="title-text">
            <h4>
              <a href={this.props.website}>{this.props.company}</a>
            </h4>
            <h6>{this.props.position}</h6>
          </div>
          <div className="title-date">
            <h5>{dates}</h5>
          </div>
        </div>
        <div>
          <label>Highlights</label>
          <ul>
            {highlights}
          </ul>
          <label>Summary</label>
          <p className="block-paragraph">{this.props.summary}</p>
        </div>
        {this.props.showDivider && <Line />}
      </div>
    );
  }
}

class Highlight extends React.Component {

  render() {
    return (
      <li key={this.props.key}>
        {this.props.highlight}
      </li>
    );
  }
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

