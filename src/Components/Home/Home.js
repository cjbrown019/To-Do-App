// import React, { useState } from 'react'
import { animated, useSpring, useTrail } from '@react-spring/web'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Login from '../Auth/Login'
import './Home.css'
// import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {

  const navigate = useNavigate()

  return (
    <article className='home'>
      

      <Card className='w-50 mx-auto card-welcome'>
        <Card.Header className='text-center text-custom-primary'>
          <h1>Want To Make A Podcast?</h1>
        </Card.Header>
        <Card.Body>
          <p className="text-center text-custom-primary">
            Welcome to my site to make that happen. My name is Corbin and this is a project of mine to demonstrate my skills with ReactJS. I made an API that holds thet data of the todo items and their categories. The API in tandem with Axios I created a list that can be changed and manipulated by anyone with admin access. It can only be viewed by those login with GitHub to demonstrate my knowledge 3rd party logins. Thank you for visiting my site.
          </p>

          <buttton className="btn bg-custom-secondary" onClick={() => navigate('/todos')}>
            Lets Go!
          </buttton>
        </Card.Body>
      </Card>
      
    </article>
  )
}
