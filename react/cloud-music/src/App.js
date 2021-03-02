// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { render } from 'react-dom';
import { GlobalStyle } from './style';
// iconfont
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter } from 'react-router-dom'; // 前端路由
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';


// 根据当前的path       /Singer
function App() { // react 组件 函数式组件
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62B;</i>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

// class App extends Component {
//   constructor() {
//     this.setState({

//     })
//   }
//   render() {
//     return (
//       <div>
//         aaa
//       </div>
//     )
//   }
// }

export default App;
