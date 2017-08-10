
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import FormInput from '../containers/Input';
import LoginButton from '../containers/LoginButton';
import { setUserEmail, setUserPassword, signUpWithEmailAndPassword } from '../actions/index';

const mapStateToProps = (state) => ({
    authorizing: state.user.authorizing
});

class LoginUI extends Component {
    state = { email: '', password: '' }
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleSubmit = e => {
      const { email, password } = this.state
      // this.props.dispatch(
      //   setUserEmail(email)
      // )
      // setUserPassword(password)
      this.props.dispatch(

        signUpWithEmailAndPassword(email, password)
      )
    }
    render() {
        const { email, password, submittedEmail, submittedPassword } = this.state;
        return (
          <div className='login-form'>
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>

            <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' />
                  {' '}Create Account
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon='user'
                      name='email'
                      iconPosition='left'
                      placeholder='E-mail address'
                      value={email}
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      fluid
                      icon='lock'
                      name='password'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      value={password}
                      onChange={this.handleChange}
                    />
                    <Form.Button color='teal' fluid size='large' content='REGISTER'></Form.Button>
                  </Segment>
                </Form>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' />
                  {' '}Sign In
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    <Button style={{ padding: 10, width: '100%', marginBottom: 20}}> <Icon size='large' name='google' ></Icon>Sign in with Google </Button>
                    <Form.Input
                      fluid
                      icon='user'
                      name='email'
                      iconPosition='left'
                      placeholder='E-mail address'
                      value={email}
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      fluid
                      icon='lock'
                      name='password'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      value={password}
                      onChange={this.handleChange}
                    />
                    <Form.Button color='teal' fluid size='large' content='SIGN IN'></Form.Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>

          </div>
        );
    }
}

export default connect(mapStateToProps)(LoginUI);
