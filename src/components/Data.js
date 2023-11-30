import Api from './Api.js'
import { useState, useEffect } from 'react'
import { addWorkoutDb } from '../services/workoutService.js'
import { useAuth } from '../services/authService.js'

function Data() {
<<<<<<< HEAD
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
=======
  const [apiParameter, setApiParameter] = useState(undefined)
  const [listType, setListType] = useState('muscle')

  return (
    <div>
      <p>
        List By:
        <select
          name="type"
          id="type"
          value={listType}
          onChange={e => {
            setListType(e.target.value)
            setApiParameter(undefined)
          }}
          className="select"
        >
          <option value="muscle">Muscle Group</option>
          <option value="type">Exercise Type</option>
        </select>
        {listType == 'muscle' && (
          <select
            name="muscle"
            id="muscle"
            value={apiParameter}
            onChange={e => setApiParameter(e.target.value)}
            className="select"
          >
            <option value="" disabled={apiParameter !== undefined}>
              Target Muscle
            </option>
            <option value="muscle=abdominals">Abdominals</option>
            <option value="muscle=abductors">Abductors</option>
            <option value="muscle=adductors">Adductors</option>
            <option value="muscle=biceps">Biceps</option>
            <option value="muscle=calves">Calves</option>
            <option value="muscle=chest">Chest</option>
            <option value="muscle=forearms">Forearms</option>
            <option value="muscle=hamstrings">Hamstrings</option>
            <option value="muscle=lats">Lats</option>
            <option value="muscle=lower_back">Lower_back</option>
            <option value="muscle=middle_back">Middle_back</option>
            <option value="muscle=neck">Neck</option>
            <option value="muscle=quadriceps">Quadriceps</option>
            <option value="muscle=traps">Traps</option>
            <option value="muscle=triceps">Triceps</option>
          </select>
        )}
        {listType == 'type' && (
          <select
            name="cardio"
            id="cardio"
            value={undefined}
            onChange={e => setApiParameter(e.target.value)}
            className="select"
          >
            <option value="" disabled={apiParameter !== undefined}>
              Type
            </option>
            <option value="type=cardio">Cardio</option>
            <option value="type=olympic_weightlifting">Olympic Weightlifting</option>
            <option value="type=plyometrics">Plyometrics</option>
            <option value="type=powerlifting">Powerlifting</option>
            <option value="type=strength">Strength</option>
            <option value="type=stretching">Stretching</option>
            <option value="type=strongman">Strongman</option>
          </select>
        )}
      </p>
      {apiParameter !== undefined && <Api addOn={apiParameter} />} {/*   Doesnt update when muscle/type is changed   */}
>>>>>>> 93d5999dcb64e7f935089df3b02703a26cca40c8
    </div>
  )
}
export default Data
