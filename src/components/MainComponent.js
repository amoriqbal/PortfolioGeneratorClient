import React, { Component } from 'react';
import styles from '../styles/mystyle.module.css';
import SmallNav from './SmallNav';
import BodyTag from './BodyTag';


class MainComponent extends Component {

  render() {
    return (
        <div className={styles.bground}>
          <center><h1><b>Soumik Sen</b></h1></center>
          <div className = {styles.textground}>
            <SmallNav/>
          </div>
          <div className={styles.pictureground}>
            <BodyTag/>
          </div>
        </div>
    );
  }

}

export default MainComponent;
