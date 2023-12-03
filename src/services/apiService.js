import { useEffect } from 'react'

export async function getApiData(addOn) {
  const apiKey = 'Xrl51qDFfoM9efpFLe3fQA==99IryFKClz7aqFze'

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/exercises?${addOn}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    console.log('in the api call------------------\n ', result)
    return result
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export function DisplayData(muscleData) {
  return (
    <div>
      {muscleData.muscleData.length > 0 ? (
        muscleData.muscleData.map((item, index) => (
          <div key={index} value={index}>
            <p className="exerciseName">Name: {item.name}</p>
            <p className="characteristic">Equipment Needed: {item.equipment}</p>
            <p className="characteristic">Difficulty: {item.difficulty}</p>
            <p className="characteristic">Instructions: {item.instructions}</p>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </div>
  )
}
