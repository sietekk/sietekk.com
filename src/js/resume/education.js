'use strict';

import React from 'react';
import Tile from '../widget/tile';
import Line from '../widget/line';

export default class Education extends React.Component {

  render() {

    let data = this.props.data;

    let lastIndex = data.length - 1;
    let institutions = data.map(
      (institution, index) =>
        <Institution
          key={index}
          institution={institution.institution}
          area={institution.area}
          startDate={institution.startDate}
          endDate={institution.endDate}
          studyType={institution.studyType}
          courses={institution.courses}
          showDivider={(index === lastIndex) ? false : true}
        />
    );

    return (
      <Tile>
        <h4 className="center-text">Education</h4>
        <Line />
        {institutions}
      </Tile>
    );
  }
}

class Institution extends React.Component {

  render() {

    let dates = '';
    if (isEmpty(this.props.endDate)) {
      dates = this.props.startDate;
    } else {
      dates = this.props.startDate + ' - ' + this.props.endDate;
    }

    let studies = '';
    if (isEmpty(this.props.studyType)) {
      studies = this.props.area;
    } else {
      studies = this.props.studyType + ' - ' + this.props.area;
    }

    let courses = this.props.courses.map(
      (course, index) =>
        <Course
          key={index}
          course={course}
        />
    );

    return (
      <div key={this.props.key}>
        <div className="heading-container">
          <div className="title-text">
            <h4>{this.props.institution}</h4>
            <h6>{studies}</h6>
          </div>
          <div className="title-date">
            <h5>{dates}</h5>
          </div>
          </div>
        <div>
          <label>Courses</label>
          <ul>
            {courses}
          </ul>
        </div>
        {this.props.showDivider && <Line />}
      </div>
    );
  }
}

class Course extends React.Component {

  render() {
    return (
      <li key={this.props.key}>
        {this.props.course}
      </li>
    );
  }
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

