import React from 'react'
import ActiveLink from '../active-link/ActiveLink';

const navItems =  [
  {
    path: '/about',
    text: 'About'
  },
  {
    path: '/contact',
    text: 'Contact'
  },
  {
    path: '/profile',
    text: 'Profile'
  },
];

function Navbar() {
  return (
    <nav className='flex bg-blue-900  bg-opacity-60 p-2 m-2 rounded' >
      <a href="/">Home</a>
      <div className='flex flex-1'></div>
      {navItems.map(({path, text}) => (
        <ActiveLink key={path} path={path} text={text} />
      ))}
    </nav>
  )
}

export default Navbar