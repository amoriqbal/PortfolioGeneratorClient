import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <>
        <Menu inverted className={styles.navbar}>
          <Menu.Item
            name='Home'
            active={this.props.tab === 'Home'}
            className={this.props.tab === 'Home'?styles.active:styles.inactive}
            onClick={()=>{window.location='/'}}
          />
          <Menu.Item
            name='About Us'
            active={this.props.tab === 'About'}
            className={this.props.tab === 'About'?styles.active:styles.inactive}
            onClick={()=>{window.location='/about'}}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Sign Up'
              onClick={()=>{window.location='/register'}}
            />
            <Menu.Item
              name='Login'
              onClick={()=>{window.location='/login'}}
            />
          </Menu.Menu>
        </Menu>
      </>
    )
  }
}

export default Navbar;
