import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Bundle from './bundle'

import Home from './components/Home' // 首页不按需加载

// bundle-loader 按需加载
import loadAbout from 'bundle-loader?lazy&name=[name]!./components/About' 
import loadTopics from 'bundle-loader?lazy&name=[name]!./components/Topics'
import loadTodo from 'bundle-loader?lazy&name=[name]!./components/Todo'



// 按需加载组件
const About = () => (
  <Bundle load={loadAbout}>
    {(About) => <About/>}
  </Bundle>
)

const Topics = (props) => (
  <Bundle load={loadTopics}>
    {(Topics) => <Topics props={props} />}
  </Bundle>
)

const Todo = () => (
  <Bundle load={loadTodo}>
    {(Todo) => <Todo/>}
  </Bundle>
)

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
