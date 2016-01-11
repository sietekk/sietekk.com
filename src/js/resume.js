'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Profile from './resume/profile';
import Work from './resume/work';
import Skills from './resume/skills';
import Education from './resume/education';
import NavBar from './widget/navbar';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    this.loadResume();
  }

  loadResume() {
    fetch(this.props.resumeURL)
      .then(response => response.json())
      .then(data => this.setState({data: data}))
      .catch(err => console.error(this.props.resumeURL, err.toString()))
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        {this.state.data ? this.renderResume() : this.renderLoading()}
      </div>
    );
  }

  renderLoading() {
    return (
      <div />
    );
  }

  renderResume() {

    let profile = this.state.data.basics;
    let work = this.state.data.work;
    let skills = this.state.data.skills;
    let education = this.state.data.education;

    return (
      <ReactCSSTransitionGroup transtitionName="on-load" transitionAppear={true} transitionAppearTimeout={500}>
        <div className="container">
          <div className="row">
            <aside className="col-md-4">
              <div>
                <Profile data={profile} />
              </div>
            </aside>
            <main className="col-md-8">
              <div>
                <Work data={work} />
                <Education data={education} />
                <Skills data={skills} />
              </div>
            </main>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }

}

Resume.defaultProps = {resumeURL: 'api/resume',};

