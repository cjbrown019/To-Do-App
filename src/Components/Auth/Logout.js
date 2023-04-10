import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Log.css'

export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleAuth() {
        logout()
        navigate('/')
    }

  return (
   
        <a className="nav-link cursor text-custom-primary" onClick={() => handleAuth()} >
            Logout
        </a>
    
  )
}
