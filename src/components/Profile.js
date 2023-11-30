import { useAuth } from '../services/authService'
import { getUserByUid, getUserPhoto } from '../services/userServices'

function Profile() {
  const user = useAuth()

  // const user = getUserByUid()

  return (
    <div>
      {user ? (
        <div>
          <p>User: {user.displayName}</p>
          <p>
            <img className="userImage" src={getUserPhoto(user)} alt="user"></img>
          </p>
          <p>Last sign in: {user.metadata.lastSignInTime}</p>
        </div>
      ) : (
        <p>Sign in to see user profiles</p>
      )}
    </div>
  )
}
export default Profile
