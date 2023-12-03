import { useState, useEffect } from 'react'
import { ExerciseData, addWorkoutDb } from '../services/workoutService.js'
import { useAuth } from '../services/authService.js'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Data() {
  const user = useAuth()
  const navigate = useNavigate()
  const [exercises, setExercises] = useState([])
  const [name, setName] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [workoutName, setWorkoutName] = useState('')

  const [fieldError, setFieldError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [noDataError, setNoDataError] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleAddWorkout = () => {
    if (workoutName) {
      if (exercises.length > 0) {
        setWorkoutName('')
        //add an option whether or not to add to public database
        addWorkoutDb(user, workoutName, exercises, isChecked)
        console.log('calling add workout')
        setNoDataError(false)
      } else setNoDataError(true)
      setNameError(false)
    } else {
      setNameError(true)
    }
  }

  const handleSuggestionClick = () => {
    navigate('/home/suggestion')
  }

  const handleAddExercise = () => {
    if (name && reps && weight) {
      setExercises(prevExercises => [...prevExercises, { name, reps, weight }])
      setReps('')
      setWeight('')
      setName('')
      setFieldError(false)
    } else setFieldError(true)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div>
      {user ? (
        <div className="Data">
          <span>
            Workout Name <input value={workoutName} onChange={e => setWorkoutName(e.target.value)}></input>
            Make workout public<input type="checkbox" value={'isChecked'} onChange={handleCheckboxChange}></input>
          </span>
          {nameError && <p>Error: must enter a name</p>}
          {noDataError && <p>Error: must enter at least one exercise</p>}
          <span>
            Exercise Name<input value={name} onChange={e => setName(e.target.value)}></input>
          </span>
          <span>
            Reps<input value={reps} onChange={e => setReps(e.target.value)}></input>
          </span>
          <span>
            Weight<input value={weight} onChange={e => setWeight(e.target.value)}></input>
          </span>
          {fieldError && <p>Error: all fiels must be completed</p>}
          <button onClick={handleAddExercise}>Add Exercise</button>
          <ExerciseData array={exercises} />
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
