import React, { useEffect } from 'react'

const api = () => {
  useEffect(() => {
    const muscle = 'biceps'
    const apiKey = 'Xrl51qDFfoM9efpFLe3fQA==99IryFKClz7aqFze'

    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])

  return <div>{/* api content */}</div>
}

export default api
