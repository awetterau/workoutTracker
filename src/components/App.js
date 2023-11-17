import { Outlet } from 'react-router'
import './App.css'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import NavBar from './NavBar'
import { SignOut, useAuth } from '../services/authService'
import { useEffect } from 'react'
import { addUserDb, getUserPhoto } from '../services/userServices'

function App() {
  const user = useAuth()

  useEffect(() => {
    if (user) {
      addUserDb()
    }
  }, [user])

  return (
    <div className="App">
      <header className="App-header">
        {user ? <img className="userImage" src={getUserPhoto()} alt="user" /> : <span>Sign in to see profile</span>}
        <span className="MainTitle">Gym Tracker</span>
        {user ? <SignOut /> : <SignIn />}
      </header>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
