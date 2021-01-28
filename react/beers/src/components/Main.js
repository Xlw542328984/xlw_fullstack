import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Loader from './Loader';
import List from './List';
import Item from './Item';

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            isloading: true
        }
    }
    render() {
        return (
            <div>
                Main
                {/* 小程序里面有a标签吗？怎么实现跳转 */}
                <Link to="/beer">Beer</Link>
                {/* 首页 组件化 */}
                <Header siteName="Beer me!"/>
                <Loader />
                <List />
                <Item />
            </div>
        )
    }
}