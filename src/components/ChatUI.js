
import React, { Component } from 'react';
import { connect } from 'react-redux';


import Messages from '../containers/Messages';
import Input from '../containers/Input';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => ({
    chatHeight: state.chatroom.meta.height,
    user: state.user
});

class ChatUI extends Component {


    render() {
        return (
          <div>
          in the chatroom
          </div>
        )
    }
}

export default connect(mapStateToProps)(ChatUI);
