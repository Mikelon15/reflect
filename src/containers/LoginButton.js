
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Container } from 'semantic-ui-react';
import { login } from '../actions';

class LoginButton extends Component {
    onLogin = () => {
        this.props.dispatch(login());
    }

    render() {
        return (
            <Button styleName="light" onClick={this.onLogin}>
                <Container>Start Chatting</Container>
            </Button>
        )
    }
}

export default connect()(LoginButton);
