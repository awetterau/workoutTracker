import { useState, useEffect } from 'react'
import { addWorkoutDb } from '../services/workoutService.js'
import { useAuth } from '../services/authService.js'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Data() {
  const user = useAuth()
  const navigate = useNavigate()
  const [exercises, setExercises] = useState([])
  const [name, setName] = useState(null)
  const [reps, setReps] = useState(null)
  const [weight, setWeight] = useState(null)

  const handleAddWorkout = () => {
    addWorkoutDb(user, 'test', 'test')
  }

  const handleSuggestionClick = () => {
    navigate('/home/suggestion')
  }

  const handleAddExercise = () => {
    if (name && reps && weight) {
      setExercises([...exercises, { name, reps, weight }])
      console.log(exercises)
      setReps(null)
      setWeight(null)
      setName(null)
    }
  }

  return (
    <div>
      {user ? (
        <div className="Data">
          <span>
            Exercise Name<input value={name} onChange={e => setName(e.target.value)}></input>
          </span>
          <span>
            Reps<input value={reps} onChange={e => setReps(e.target.value)}></input>
          </span>
          <span>
            Weight<input value={weight} onChange={e => setWeight(e.target.value)}></input>
          </span>
          <button onClick={handleAddExercise}>Add Exercise</button>

          <button onClick={handleAddWorkout}>Add workout to db</button>
          <button onClick={handleSuggestionClick}>Get a suggestion</button>
        </div>
      ) : (
        <p>Sign in to record data</p>
      )}
    </div>
  )
}
export default Data
