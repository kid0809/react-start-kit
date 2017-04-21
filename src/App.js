import React from 'react'
import ReactDOM from 'react-dom'

import Dashboard from './Dashboard'

const render = Component => {
  ReactDOM.render(<Component/>, document.getElementById('root'))
}

render(Dashboard)

// 热加载更新
if(module.hot) {
	module.hot.accept('./Dashboard', () => {
    const NextDashboard = require('./Dashboard').default
    render(NextDashboard)
  })
}
