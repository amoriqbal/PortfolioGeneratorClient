import React, { Component } from 'react';
import styles from '../styles/mystyle.module.css';
import ContactDetails from './ContactDetails';

class FooterTag extends Component {

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerground}>
          <ContactDetails/>
        </div>
      </div>
    );
  }

}

export default FooterTag;
