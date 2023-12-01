import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export function LoginButton() {
  const [isButtonDisabled, setButtonDisabled] = useState(false)

  const handleLoginClick = () => {
    if (!isButtonDisabled) {
      setButtonDisabled(true)

      const popupListener = auth.onAuthStateChanged(user => {
        if (user) {
          console.log('Successfully signed in:', user)
        } else {
          console.error('Pop-up closed or sign-in error')
        }
        setButtonDisabled(false)
        popupListener()
      })

      signInWithPopup(auth, new GoogleAuthProvider()).catch(error => {
        console.error('Error signing in:', error)
        setButtonDisabled(false)
        popupListener()
      })
    }
  }

  return (
    <button onClick={handleLoginClick} disabled={isButtonDisabled}>
      Sign In
    </button>
  )
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
