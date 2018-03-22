import Home from 'containers/home'
import HireMe from 'containers/hireme'
import Projects from 'containers/projects'
import Timeline from 'containers/timeline'

export default [
  {
    path: '/hireme',
    component: HireMe,
    name: 'Hire Me!'
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects'
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
