import React, { useEffect, useState } from 'react'

function Api({ addOn }) {
  const [muscleData, setMuscleData] = useState([])
  useEffect(() => {
    const apiKey = 'Xrl51qDFfoM9efpFLe3fQA==99IryFKClz7aqFze'

    fetch(`https://api.api-ninjas.com/v1/exercises?${addOn}`, {
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
        setMuscleData(result)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div>
      {muscleData.map((item, index) => (
        <div>
          <p className="exerciseName" key={index} value={index}>
            Name: {item.name}
          </p>
          <p classname="characteristic">Equipment Needed: {item.equipment}</p>
          <p classname="characteristic">Difficulty: {item.difficulty}</p>
          <p classname="characteristic">Instructions: {item.instructions}</p>
        </div>
      ))}
    </div>
  )
}

export default Api
