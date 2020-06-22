import React, { Component } from 'react';
import styles from '../styles/mystyle.module.css';

class SmallNav extends Component {

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">Web Developer</div>
            <div class="col-md-1">HOME</div>
            <div class="col-md-1">RESUME</div>
            <div class="col-md-1">PROJECTS</div>
            <div class="col-md-1">CONTACTS</div>
          </div>
        </div>
      </div>
    );
  }

}

export default SmallNav;
