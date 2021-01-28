import React, { Component } from 'react';
import './CommentList.css';
import Comment from './Comment';

export default class CommentList extends Component {
    render() {
        return ( //wxml JSX
            <div>
                {/* json array => (通过 map) html array */}
                评论区
                {
                    this.props.comments.map(comment => <Comment comment={comment}/>)
                }
            </div>
        )
    }
}