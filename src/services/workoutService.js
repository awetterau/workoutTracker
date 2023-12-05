import { auth, db } from '../firebaseConfig'
import { updateDoc, addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'

export async function addWorkoutDb(user, name, weight, reps, sets, timed) {
  const uid = user.uid
  const today = new Date()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  const date = today.getDate()
  const currentDate = month + '-' + date + '-' + year

  console.log('hi')
  const docs = await getDoc(doc(db, 'users', uid, 'days', currentDate))
  if (!docs.exists()) {
    if (timed) {
      await setDoc(doc(db, 'users', uid, 'days', currentDate), {
        [name]: {
          reps,
          sets,
          timed
        }
      })
    } else {
      await setDoc(doc(db, 'users', uid, 'days', currentDate), {
        [name]: {
          weight,
          reps,
          sets,
          timed
        }
      })
    }
  } else {
    if (timed) {
      await updateDoc(doc(db, 'users', uid, 'days', currentDate), {
        [name]: {
          reps,
          sets,
          timed
        }
      })
    } else {
      await updateDoc(doc(db, 'users', uid, 'days', currentDate), {
        [name]: {
          weight,
          reps,
          sets,
          timed
        }
      })
    }
  }
}

export async function addExcersiseDb(user, name, type) {
  const uid = user.uid

  console.log('hi')

  await setDoc(doc(db, 'users', uid, 'workouts', name), {
    type
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
