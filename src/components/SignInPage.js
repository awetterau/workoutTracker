import SignIn, { LoginButton } from '../services/authService.js'
import { useAuth } from '../services/authService'
import { addUserDb } from '../services/userServices.js'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router'

function SignInPage() {
  const user = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      addUserDb(user)
      navigate('home')
    }
  }, [user])

  return (
    <div className="SignInPage">
      <p>This is the sign in SignInPage</p>
      <LoginButton />
    </div>
  )
}

export default SignInPage
