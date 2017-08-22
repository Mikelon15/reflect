
import React, { Component } from 'react';
import { connect } from 'react-redux';


import Messages from '../containers/Messages';
import Input from '../containers/Input';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => ({
    chatHeight: state.chatroom.meta.height,
    user: state.user
});

const ChatUI = connect(
  mapStateToProps
)(({user}) => {
  return (
    <div>
      in the chatroom with <h1>{user.email}</h1>
    </div>
  )
})

export default connect(mapStateToProps)(ChatUI);
