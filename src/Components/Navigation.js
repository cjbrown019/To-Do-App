import React from 'react'
import { Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Logout from './Auth/Logout'
import '../Components/Navigation.css'

// import ProtectedRoute from './ProtectedRoute'

export default function Navigation() {
  const {currentUser} = useAuth()
  return (
    <Navbar expand="md" variant='dark' bg='' className='p-4 bg-dk-secondary'>
      <strong>
      <Navbar.Brand className='ms-5 text-custom-primary' href='/'>How To Podcast</Navbar.Brand> 
      </strong>
      <Navbar.Toggle/>
      <Navbar.Collapse className='justify-content-start'>
        <Nav>
          <Link to="/" className='nav-link text-custom-primary'>Home</Link>
          
          <Link to='/todos' className='nav-link text-custom-primary'>ToDos</Link>
          <Link to="/categories" className='nav-link text-custom-primary'>Categories</Link>
          
          {!currentUser ?
          <Link to='/login' className='nav-link text-custom-primary'>Login</Link>
          :
          <Logout/>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
