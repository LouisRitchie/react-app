import Home from 'containers/home'
import HireMe from 'containers/hireme'
import Portfolio from 'containers/portfolio'
import Timeline from 'containers/timeline'

export default [
  {
    path: '/hireme',
    component: HireMe,
    name: 'Hire Me!'
  },
  {
    path: '/portfolio',
    component: Portfolio,
    name: 'Portfolio'
  },
  {
    path: '/timeline',
    component: Timeline,
    name: 'Timeline'
  },
  {
    path: '/',
    component: Home,
    name: 'Home'
  }
]
