import Data from './Data.js'
import { useState } from 'react'

function Dashboard() {
  const [addingWorkout, setAddingWorkout] = useState(false)

  return (
    <div>
      {!addingWorkout ? (
        <div>
          <p>Your Dashboard</p>
          <div>
            <p>
              Today's Exercises <button onClick={() => setAddingWorkout(true)}>Add Workout</button>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Data trigger={addingWorkout} setTrigger={setAddingWorkout} />
        </div>
      )}
    </div>
  )
}
export default Dashboard
