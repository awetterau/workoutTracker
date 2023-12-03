import { auth, db } from '../firebaseConfig'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'

export async function addWorkoutDb(user, workout, name) {
  console.log(user)
  const uid = user.uid
  const displayName = user.displayName

  const data = { uid, displayName, workout }
  console.log(data)
  await setDoc(doc(db, 'workouts', name), {
    data
  })
}

export function addExercise() {}

// export async function getUserByUid(uid) {
//   const docRef = doc(db, 'users', uid.uid)
//   const docSnap = await getDoc(docRef)
//   const data = docSnap.data()
//   return data
// }
