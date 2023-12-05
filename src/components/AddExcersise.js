import { useState, useEffect } from 'react'
import { ExerciseData, addWorkoutDb, addExcersiseDb } from '../services/workoutService.js'
import { useAuth } from '../services/authService.js'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function AddExcersise(props) {
  const user = useAuth()
  const [name, setName] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [timed, setTimed] = useState(false)
  const [weight, setWeight] = useState('')
  const [time, setTime] = useState('')

  const [fieldError, setFieldError] = useState(false)

  const handleAddWorkout = () => {
    if (!timed) {
      if (name && reps && weight && sets) {
        addWorkoutDb(user, name, weight, reps, sets, timed)
        addExcersiseDb(user, name, timed)
        console.log('calling add workout')
        setFieldError(false)
      } else setFieldError(true)
    } else {
      if (name && reps && time && sets) {
        addWorkoutDb(user, name, weight, time, sets, timed)
        addExcersiseDb(user, name, timed)
        console.log('calling add workout')
        setFieldError(false)
      } else setFieldError(true)
    }
    props.setTrigger(false)
  }

  return props.trigger ? (
    <div className="Data">
      <span>
        Exercise Name<input value={name} onChange={e => setName(e.target.value)}></input>
      </span>
      <span>
        Sets<input value={sets} onChange={e => setSets(e.target.value)}></input>
      </span>
      <button onClick={() => setTimed(!timed)}>Toggle Time/Weight</button>
      {!timed ? (
        <div>
          <p>
            Weight<input value={weight} onChange={e => setWeight(e.target.value)}></input>
          </p>
          <span>
            Reps<input value={reps} onChange={e => setReps(e.target.value)}></input>
          </span>
        </div>
      ) : (
        <div>
          <span>
            Time(mm:ss) <input value={reps} onChange={e => setTime(e.target.value)}></input>
          </span>
        </div>
      )}
      {fieldError && <p>Error: all fiels must be completed</p>}
      <button onClick={handleAddWorkout}>Add workout to db</button>
    </div>
  ) : (
    ''
  )
}
export default AddExcersise
