import Api from './Api.js'
import { useState, useEffect } from 'react'
import { addWorkoutDb } from '../services/workoutService.js'
import { useAuth } from '../services/authService.js'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Data() {
  const user = useAuth()
  const navigate = useNavigate()

  const handleClick = () => {
    addWorkoutDb(user, 'test', 'test')
  }

  const handleSuggestionClick = () => {
    console.log('Wtffff')
    navigate('/home/suggestion')
  }

  return (
    <div>
      {user ? (
        <div>
          <button onClick={handleClick}>Add workout to db</button>
          <button onClick={handleSuggestionClick}>Get a suggestion</button>
        </div>
      ) : (
        <p>Sign in to record data</p>
      )}
    </div>
  )
}
export default Data
