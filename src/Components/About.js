import React from 'react';
import {Container, Header, Divider, Card, Icon, Image} from 'semantic-ui-react';
import Navbar from './Navbar';
import {Footer} from './Footer';
import styles from './About.module.css';

export const About = () => {
  return (
    <div class={styles.body}>
      <Navbar tab='About'/>
      <div class={styles.Body}>
        <Header size='huge' textAlign='center' content='Portfolio'/>
        <Divider/>
        <Container>
          <Header size='large' content='Developers'/>
          <Divider/>
          <Card.Group itemsPerRow={3} className={styles.group} centered>
            <Card className={styles.card} centered>
              <Image src='amor.jpg' className={styles.image} ui={false}/>
              <Card.Content>
                <Card.Header>
                  Amor Iqbal
                </Card.Header>
                <Card.Meta>
                  2nd year CST student at IIEST, Shibpur
                </Card.Meta>
                <Card.Description>
                  <Icon name='globe' />
                  Website: <a href="https://blah.com/amor">https://blah.com/amor</a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name='envelope'/>
                amoriqbalmail@gmail.com
                <br/>
                <Icon name='phone'/>
                +91 9875639195
              </Card.Content>
            </Card>
            <Card className={styles.card} centered>
              <Image src='pratim.jpg' className={styles.image} ui={false}/>
              <Card.Content>
                <Card.Header>
                  Pratim Kanrar
                </Card.Header>
                <Card.Meta>
                  2nd year CST student at IIEST, Shibpur
                </Card.Meta>
                <Card.Description>
                  <Icon name='globe' />
                  Website: <a href="https://blah.com/pratim">https://blah.com/pratim</a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name='envelope'/>
                kanrar.pratim@gmail.com
                <br/>
                <Icon name='phone'/>
                +91 8609401561
              </Card.Content>
            </Card>
            <Card className={styles.card} centered>
              <Image src='soumik.jpg' className={styles.image} ui={false}/>
              <Card.Content>
                <Card.Header>
                  Soumik Sen
                </Card.Header>
                <Card.Meta>
                  2nd year CST student at IIEST, Shibpur
                </Card.Meta>
                <Card.Description>
                  <Icon name='globe' />
                  Website: <a href="https://blah.com/soumik">https://blah.com/soumik</a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name='envelope'/>
                imrimosen@gmail.com
                <br/>
                <Icon name='phone'/>
                +91 9748345124
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
        <Footer/>
      </div>
    </div>
  );
}
