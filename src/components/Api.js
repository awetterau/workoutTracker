import React, { useEffect, useState } from 'react'

function Api({ addOn }) {
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
      return result // Does not return results despite the results outputting into console.log
    })
    .catch(error => {
      console.error('Error:', error)
    })
}

export default Api
