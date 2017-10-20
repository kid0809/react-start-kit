import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'
import Todo from './components/Todo'


// 主页，路由各组件
const Dashboard = () => (
  <Router>
    <div className="wrap">
      {/* 左侧链接导航 */}
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>
      </div>

      {/* 右侧内容组件 */}
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/todo" component={Todo}/>
      </div>
    </div>
  </Router>
)


export default Dashboard
