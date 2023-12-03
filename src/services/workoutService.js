import { auth, db } from '../firebaseConfig'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'

export async function addWorkoutDb(user, name, workout, bool) {
  const uid = user.uid
  const displayName = user.displayName

  const data = { uid, displayName, workout }

  console.log('is checked ----', bool)
  if (bool) {
    await setDoc(doc(db, 'publicWorkouts', name), {
      data
    })
  }
  await setDoc(doc(db, 'users', uid, 'workouts', name), {
    workout
  })
}

export function ExerciseData(array) {
  return array.array ? (
    array.array.map((item, index) => (
      <div key={index}>
        <p>Name: {item.name}</p>
        <p>Reps: {item.reps}</p>
        <p>Weight: {item.weight}</p>
      </div>
    ))
  ) : (
    <p>No data</p>
  )
}

// export async function getUserByUid(uid) {
//   const docRef = doc(db, 'users', uid.uid)
//   const docSnap = await getDoc(docRef)
//   const data = docSnap.data()
//   return data
// }
