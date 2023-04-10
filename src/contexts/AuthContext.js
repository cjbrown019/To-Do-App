//We will create a React Context in this file that will house all authentication info (currentUser, login, logout).
//React contexts allow us to store information and transport that info to the components that use it. We could store
//this info in the App component and just pass props to send the user information to other components but this isn't
//ideal for larger apps. Instead, we create the context and a component that will communicate this context to its
//children. Think of this much like Session storage in a .NET application.
import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../base' // Gives access to the auth object which has initialized authenticaiton
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

// above are firebase functions we need to use in the component portion of the file below

// Below we create a context (storage object) for all our auth info
const AuthContext = React.createContext()

// Below we create a function that will allow us to use the context in components. We will import this function
// anytime we want access to the currentUser, Login, or Logout functionality
export function useAuth(){
    return useContext(AuthContext)
}

// This component will provide the AuthContext info to the children components nested inside of it. See App.js
// where we call to an instance of this component and nest all other components inside of it.
export default function AuthProvider({children}) {
    // Create hooks for curent user as well as another custom hook to determine if the context has info to share with child components before redering the child components to the screen
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    // Login functionality
    // Instantiate a GithubAuthProvider
    const githubAuthProvider = new GithubAuthProvider()

    async function login(){
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
            // This point in login logic is where we could add additional functionality such as role assignment or saving the user to a local database if one is present
        }))
    }

    async function logout() {
        signOut(auth).then(setCurrentUser(null))
    }

    // The object below will hold currentUser info and login/logout functions so we can use them in the child components. We will pass this as a prop in the return below.
    const value = { currentUser, login, logout}

    useEffect(() => {
        //authChange will ise firebase functionality to get user info, set the currentUser hook to the value retrieved and allow components to load in using the custom "loading" hook.
        const authChange = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return authChange;
    }, []);

  return (
    <AuthContext.Provider value={value}>
        {/* Below we are waiting for the AuthContext info to populate before loading the child components in the UI. */}
        {!loading && children}
    </AuthContext.Provider>
  )
}
