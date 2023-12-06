import Data from './Data.js'
import { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'
import { useAuth } from '../services/authService.js'
import ExerciseData from '../services/workoutService.js'



function Dashboard() {
  const [addingWorkout, setAddingWorkout] = useState(false)
  const [todaysData, setTodaysData] = useState([])
 
  const user = useAuth()
  
  

  const today = new Date()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  const date = today.getDate()
  const currentDate = month + '-' + date + '-' + year
  
  async function getTodaysExcersises() {
    if (user != null) {
    const uid = user.uid
    const docs = await getDoc(doc(db, 'users', uid, 'days', currentDate));
    if (docs.exists()) {
      const data = docs.data();
      const exercisesArray = Array.isArray(data) ? data : Object.values(data);
      setTodaysData(exercisesArray);
      console.log("Document data:", exercisesArray);
    } else {
      setTodaysData([]);
    }
  }
  }
  useEffect(() => {
    getTodaysExcersises()
  }, [user, addingWorkout])



  return (
    <div>
      {!addingWorkout ? (
        <div>
          <p onClick={() => getTodaysExcersises()}>Your Dashboard</p>
          <div>
            <p>
              Today's Exercises <button onClick={() => setAddingWorkout(true)}>Add Workout</button>
            </p>
            {todaysData.length > 0 ? (
                  <ExerciseData array={todaysData}/>
            ) : (
              <p>You have no data today</p>
            )}
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
