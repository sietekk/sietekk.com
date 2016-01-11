'use strict';

import React from 'react';
import NavTile from './navtile';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse className="nav-tile">
        <Navbar.Header>
          <Navbar.Brand>
            <h4>{this.props.name} <small className="small-color">{this.props.title}</small></h4>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">Blog</NavItem>
            <NavItem eventKey={2} href="/resume">About</NavItem>
            <NavItem eventKey={3} href="/admin">Admin</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  name: 'Michael Conroy',
  title: 'Software Engineer',
  imgURL: '/build/img/portrait.jpg',
  pageTitle: 'Engineering Articles',
};
