import React, { Component } from 'react';
import styles from '../styles/mystyle.module.css';
import image from '../images/soumik.jpg';
import skill1 from '../images/resume.jpg';
import skill2 from '../images/work.jpg';
import skill3 from '../images/skills.jpg'

class BodyTag extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div class="row">
          <div className={styles.space}></div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img className={styles.imgClass} src={image} alt="Image"/>
          </div>
          <div class="col-md-8">
            <p className={styles.greeting}>Hello,</p>
            <p className={styles.fixedtext}>a bit about me:</p>
            <div class={styles.skillset}>
              <div><img className={styles.skillimg} src={skill1} alt="My Resume"/></div>
              <div><img className={styles.skillimg} src={skill2} alt="My Work"/></div>
              <div><img className={styles.skillimg} src={skill3} alt="My Skills"/></div>
            </div>
            <br/><br/>
            <div class={styles.about}>
              I am a 2nd Year college student, currently pursuing Bachelor of Technology from IIEST, Shibpur.
              I am a hardworking person who is looking for a chance to learn anything new. I have natural
              leadership skills and possess the ability to learn very quickly. Other than programming, my
              interests are in Sports, Music and Gaming.
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BodyTag;
