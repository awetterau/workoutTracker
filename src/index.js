import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './components/SignInPage'
import Data from './components/Data.js'
import Profile from './components/Profile.js'
import Calender from './components/Calender.js'
import Suggestion from './components/Suggestion.js'
import Dashboard from './components/Dashboard.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
const user = null
const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />
  },
  {
    path: 'home',
    element: <App user={user} />,
    children: [
      {
        path: 'data',
        element: <Data />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'calendar',
        element: <Calender />
      },
      {
        path: 'suggestion',
        element: <Suggestion />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
