import React, { Component } from 'react';
import phone from '../images/phone.png';
import email from '../images/email.png';
import follow from '../images/follow.jpg';
import copyright from '../images/copyright.png';
import styles from '../styles/mystyle.module.css';
import {MDBIcon,MDBContainer,MDBBtn } from 'mdbreact';

class ContactDetails extends Component {

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3">
              <div class="container-fluid">
                <div class="row no-gutters">
                  <div class="col-sm-4">
                    <img className={styles.footerImg} src={phone} alt="Phone"/>
                  </div>
                  <div class="col-sm-8">
                    <p className={styles.h6}>Call:</p>
                    <p className={styles.h7}>P: +91 1234567789</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="container-fluid">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img className={styles.footerImg} src={email} alt="Email"/>
                  </div>
                  <div class="col-md-8">
                    <p className={styles.h6}>Contact:</p>
                    <p className={styles.h7}>E: abcdefghi@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="container-fluid">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img className={styles.footerImg} src={follow} alt="Follow"/>
                  </div>
                  <div class="col-md-8">
                    <p className={styles.h6}>Follow Me:</p>
                    <div class="container-fluid">
                      <div class="row">
                          <MDBBtn size="sm" tag="a" floating social="fb">
                            <MDBIcon fab icon="facebook-f" />
                          </MDBBtn>
                          <MDBBtn size="sm" tag="a" floating social="li">
                            <MDBIcon fab icon="linkedin-in" />
                          </MDBBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="container-fluid">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img className={styles.footerImg} src={copyright} alt="Copyright"/>
                  </div>
                  <div class="col-md-8">
                    <p className={styles.h7}>
                      @2020 by Soumik Sen.<br/>
                      Proudly created using APSDev.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ContactDetails;
