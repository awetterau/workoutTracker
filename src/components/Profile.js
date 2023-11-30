import { useAuth } from '../services/authService'
import { getUserByUid, getUserPhoto } from '../services/userServices'

function Profile() {
  const currentUser = useAuth()

  // const user = getUserByUid()

  return (
    <div>
      {currentUser ? (
        <div>
          <p>User: {currentUser.displayName}</p>
          <p>
            <img className="userImage" src={getUserPhoto(currentUser)} alt="user" />
          </p>
          <p>Last sign in: {currentUser.metadata.lastSignInTime}</p>
        </div>
      ) : (
        <p>Sign in to see user profiles</p>
      )}
    </div>
  )
}
export default Profile
