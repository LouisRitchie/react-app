import Home from 'containers/home'
import HireMe from 'containers/hireme'
import DetailPage from 'containers/detailPage'
import Portfolio from 'containers/portfolio'
import Timeline from 'containers/timeline'
import Error from 'containers/error'

export default [
  {
    path: '/hireme',
    component: HireMe,
    name: 'Hire Me!'
  },
  {
    path: '/portfolio/:slug',
    component: DetailPage,
    name: 'Detail Page',
    hidden: true
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
    path: '/404',
    component: Error,
    name: '404',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: 'Home'
  }
]
