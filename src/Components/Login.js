import React, {useState} from 'react';
import {Container, Header, Divider, Icon, Form, Button} from 'semantic-ui-react';
import {Footer} from './Footer';
import styles from './Login.module.css';

export const Login = () => {
  const [uname, setUname] = useState('');
  const [passwd, setPasswd] = useState('');
  return (
    <div class={styles.body}>
      <Container className={styles.Body}>
        <a href='/'>
          <Icon name='arrow left' className={styles.back}/>
        </a>
        <div class={styles.link}>
          <a href='/register'>New User? Register</a>
        </div>
        <Header size='huge' textAlign='center' content='Login Form'/>
        <Divider/>
        <div class={styles.form}>
          <Form>
            <Form.Field required>
              <label>Username or Email</label>
              <input placeholder='Username' onChange={(e)=>{setUname(e.target.value)}} required/>
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input placeholder='Password' type='password' onChange={(e)=>{setPasswd(e.target.value)}} required/>
            </Form.Field>
            <br/>
            <Button type='submit' onClick={()=>{
                if(uname && passwd){
                  let data = {
                    'username': uname,
                    'passwd': passwd
                  }
                  console.log(data);
                }
            }} color='green'>Submit</Button>
          </Form>
        </div>
        <div class={styles.google}>
          <Button animated='vertical' color='red'>
            <Button.Content visible>Login with Google <Icon name='google'/></Button.Content>
            <Button.Content hidden><Icon name='arrow right'/></Button.Content>
          </Button>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}
