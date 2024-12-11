import fetchData from '../utils/functions/fetchData'
import { useEffect, useState } from 'react'

export default function Results() {
  const [payload, setPayload] = useState(undefined)

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData()
      setPayload(data)
    }

    fetchDataAsync()
  }, [])

  if (!payload) {
    return <div> loading.. </div>
  }

  return (
    <>
      <ul>
        <p> {payload} </p>
      </ul>
    </>
  )
}
