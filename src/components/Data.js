import Api from './Api.js'
import { useState, useEffect } from 'react'
import { addWorkoutDb } from '../services/workoutService.js'
import { useAuth } from '../services/authService.js'

function Data() {
  const [muscle, setMuscle] = useState('abdominals')
  const user = useAuth()

  const handleClick = () => {
    addWorkoutDb(user, muscle, 'test')
  }

  return (
    <div>
      {user ? (
        <div>
          <p>
            <select
              name="muscle"
              id="muscle"
              value={undefined}
              onChange={e => setMuscle(e.target.value)}
              className="select"
            >
              <option value="" disabled={muscle !== undefined}>
                Target Muscle
              </option>
              <option value="abdominals">Abdominals</option>
              <option value="abductors">Abductors</option>
              <option value="adductors">Adductors</option>
              <option value="biceps">Biceps</option>
              <option value="calves">Calves</option>
              <option value="chest">Chest</option>
              <option value="forearms">Forearms</option>
              <option value="hamstrings">Hamstrings</option>
              <option value="lats">Lats</option>
              <option value="lower_back">Lower_back</option>
              <option value="middle_back">Middle_back</option>
              <option value="neck">Neck</option>
              <option value="quadriceps">Quadriceps</option>
              <option value="traps">Traps</option>
              <option value="triceps">Triceps</option>
            </select>
          </p>
          <Api muscle={muscle} /> {/*   Doesnt update when muscle is changed   */}
          <button onClick={handleClick}>Add workout</button>
        </div>
      ) : (
        <p>Sign in to record data</p>
      )}
    </div>
  )
}
export default Data
