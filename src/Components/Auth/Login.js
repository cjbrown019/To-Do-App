import React from 'react'

//Any time we want to log a user in or out check on who the user is, we need to complete 3 steps:
//Step 1) import the useAuth function from out AuthContext
import { useAuth } from '../../contexts/AuthContext'
// the useAuth function obove gives us access to the currentUser, Login and Logout objects
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'



export default function Login() {
    //Step 2) write a hook to access any of the objects we wish to use from useAuth()

    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth(){
        //Await keyword below pauses code from executing until we get a response from firebase
        await login()

        //return the user to a specific location using useNavigate from react-router-dom
        return navigate('/')
    }

  return (
        //Step 3) Create the UI and call upon our useAuth() object(s) as needed
        <div className="login">
            <article className="bg-info mb-5 p-5 text-dark banner-text">
                <h1 className="text-center">Welcome To Do!</h1>
            </article>
            <Container className='m-card' id='login'>
                <Card className=' border-dark text-center m-auto' id='loginCard'>
                    <Card.Header className='bg-dark text-white'>
                        <h2>Login for full functionality</h2>
                    </Card.Header>
                    <Card.Body className='' >
                        <button className="btn btn-success mt-4"  onClick={() => handleAuth()}>
                            Login w/ GitHub
                        </button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
  )
}
