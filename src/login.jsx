import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Form, Grid, Header, Image, Input, Message, Segment, Icon } from 'semantic-ui-react'


export default class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id = '',
      password = '',
      errors: {},
      isLoading: false;
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange - this.onChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
  }
  onChange(e){
    this.setState(P [e.target.name]: e.target.value }); 
  }
  render(){
    return (
      <div>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Log-in to your account
            </Header>

            <Form size='large'>
              <Button color='blue' fluid size='large' onClick={this.props.googleSignIn}>
                <Icon name='google' />
                Login with Google
              </Button>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='blue' fluid size='large'>Login</Button>
              </Segment>
            </Form>

            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
