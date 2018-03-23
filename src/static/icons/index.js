import React from 'react'

import CppIcon from './cpp.svg'
import CssIcon from './css.svg'
import GithubIcon from './github.svg'
import GitIcon from './git.svg'
import JavascriptIcon from './javascript.svg'
import JavaIcon from './java.svg'
import LogoIcon from './logo.svg'
import NginxIcon from './nginx.svg'
import NodeIcon from './node.svg'
import ReactIcon from './reactIcon.svg'
import RailsIcon from './rails.svg'
import SchoolIcon from './school.svg'
import TwitterIcon from './twitter.svg'
import UbuntuIcon from './ubuntu.svg'
import VimIcon from './vim.svg'
import WorkIcon from './workIcon.svg'

export default {
  cpp: <CppIcon />,
  css: <CssIcon title='css' />,
  github: <GithubIcon />,
  git: <GitIcon />,
  javascript: <JavascriptIcon />,
  java: <JavaIcon />,
  logo: <LogoIcon />,
  nginx: <NginxIcon />,
  node: <NodeIcon />,
  _react: <ReactIcon />, // does not work without underscore. because I'm writing React, most likely.
  rails: <RailsIcon />,
  school: <SchoolIcon />,
  twitter: <TwitterIcon />,
  ubuntu: <UbuntuIcon />,
  vim: <VimIcon />,
  work: <WorkIcon />
}
