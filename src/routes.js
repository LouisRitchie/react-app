import Home from 'containers/home'
import About from 'containers/about'
import Projects from 'containers/projects'
import Timeline from 'containers/timeline'

export default [
  {
    path: '/about',
    component: About,
    name: 'About'
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
