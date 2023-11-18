import { Outlet, useParams } from 'react-router'
import './App.css'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import NavBar from './NavBar'
import { SignOut, useAuth } from '../services/authService'
import { useEffect } from 'react'
import { addUserDb, getUserPhoto } from '../services/userServices'

function App() {
  const user = useAuth()

  return (
    <div className="App">
      <header className="App-header">
        {user ? <img className="userImage" src={getUserPhoto(user)} alt="user" /> : <span>Sign in to see profile</span>}
        <span className="MainTitle">Gym Tracker</span>
        {user ? <SignOut /> : <SignIn />}
      </header>
      <NavBar className="Nav" />
      <Outlet className="Content" />
    </div>
  )
}

export default App
