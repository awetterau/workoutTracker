import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './components/SignInPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
const user = null
const router = createBrowserRouter([
  {
    path: '/',
    element: <App user={user} />,
    children: [
      {
        path: 'data',
        element: <p>data</p>
      },
      {
        path: 'profile',
        element: <p>profile</p>
      },
      {
        path: 'calender',
        element: <p>calender</p>
      }
    ]
  },
  {
    path: 'login',
    element: <SignInPage />
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
