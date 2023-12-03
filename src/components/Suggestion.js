import Api from './Api.js'
import { useState, useEffect } from 'react'
import { addWorkoutDb } from '../services/workoutService.js'
import { useAuth } from '../services/authService.js'

function Suggestion() {
  const [apiParameter, setApiParameter] = useState(undefined)
  const [listType, setListType] = useState('muscle')
  const [muscleData, setMuscleData] = useState([])
  const user = useAuth()

  useEffect(() => {
    console.log('use Effect')
    returnAPI()
  }, [apiParameter])

  function returnAPI() {
    console.log('Return API')
    return apiParameter !== undefined && <Api addOn={apiParameter} />
  }

  return (
    <div>
      {user ? (
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
                onChange={e => {
                  setMuscleData(Api(e.target.value)) // Returns undefined
                  console.log(muscleData)
                }}
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
                onChange={
                  e => setMuscleData(Api(e.target.value)) // Returns undefined
                }
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
          <div>
            {muscleData != undefined &&
              muscleData.map((item, index) => (
                <div key={index} value={index}>
                  <p className="exerciseName">Name: {item.name}</p>
                  <p className="characteristic">Equipment Needed: {item.equipment}</p>
                  <p className="characteristic">Difficulty: {item.difficulty}</p>
                  <p className="characteristic">Instructions: {item.instructions}</p>
                </div>
              ))}
          </div>
          {/*   Doesnt update when muscle/type is changed   */}
        </div>
      ) : (
        <p>Sign in to record data</p>
      )}
    </div>
  )
}
export default Suggestion