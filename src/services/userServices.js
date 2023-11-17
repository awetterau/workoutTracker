import { auth, db } from '../firebaseConfig'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'

export async function addUserDb() {
  const uid = auth.currentUser.uid
  const image = auth.currentUser.photoURL
  const email = auth.currentUser.email
  const lastSignIn = auth.currentUser.metadata.lastSignInTime
  const displayName = auth.currentUser.displayName

  const data = { displayName, email, lastSignIn, image }
  await setDoc(doc(db, 'users', uid), {
    data
  })
}

export async function getUserByUid(uid) {
  const docRef = doc(db, 'users', uid.uid)
  const docSnap = await getDoc(docRef)
  const data = docSnap.data()
  return data
}

export function getUserPhoto() {
  return auth.currentUser.photoURL
}
