import { Link } from 'react-router-dom'

function NavBar(params) {
  return (
    <nav>
      <ul>
        <Link to={'data'}>Data</Link>
      </ul>
      <ul>
        <Link to={'profile'}>Profile</Link>
      </ul>
      <ul>
        <Link to={'calender'}>Calender</Link>
      </ul>
    </nav>
  )
}

export default NavBar
