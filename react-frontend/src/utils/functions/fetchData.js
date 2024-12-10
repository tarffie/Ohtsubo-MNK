async function fetchData() {
  try {
    const response = await fetch("http://localhost:8000/calculations/maria", {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP ERROR! Status: ${response.status}`)
    }

    return await response.json()
  } catch (e) {
    console.error("Error fetching data: ", e)
  }
}

export default fetchData
