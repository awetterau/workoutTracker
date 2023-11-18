import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export function LoginButton() {
  return (
    <button
      onClick={() => {
        handLoginClick()
      }}
    >
      Sign In
    </button>
  )
}

function handLoginClick() {
  signInWithPopup(auth, new GoogleAuthProvider())
}

export function useAuth() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}

export function SignOut() {
  return (
    <span>
      Hello, {auth.currentUser.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </span>
  )
}
