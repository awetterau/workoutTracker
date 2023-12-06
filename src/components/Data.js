import AddExcersise from './AddExcersise.js'
import { useState } from 'react'
import Suggestion from './Suggestion.js'
import { settings } from 'firebase/analytics'

function Data(props) {
  const [selectedList, setSelectedList] = useState('excercises')
  const [settingExcersise, setSettingExcersise] = useState(false)

  return props.trigger ? (
    <div>
      <div>
        <button onClick={() => props.setTrigger(false)}>Close</button>
        <p>
          <button onClick={() => setSelectedList('customExercises')}>Custom Exercises</button>
          <button onClick={() => setSelectedList('exercises')}>Exercises</button>
          <button onClick={() => setSelectedList('routines')}>Routines</button>
        </p>

        {selectedList === 'customExercises' && (
          <div>
            <button onClick={() => setSettingExcersise(true)}> test</button>
            {settingExcersise && <AddExcersise trigger={settingExcersise} setTrigger={setSettingExcersise} />}
          </div>
        )}
        {selectedList === 'exercises' && <Suggestion setTrigger={props.setTrigger}/>}
        {selectedList === 'routines' && ''}
      </div>
    </div>
  ) : (
    ''
  )
}
export default Data
