import React, { Component } from 'react';
import './Comment.css';

export default class Comment extends Component {
  render() {
    return ( // wxml  JSX 
      <div>
        孙组件
        {this.props.comment.username}: {this.props.comment.content}
      </div>
    )
  }
}
