import Header from '../components/Header'
import Greeting from '../components/Greeting'
import CardsRow from '../components/CardsRow'

import { useState } from 'react'

export default function DashboardPage() {
  const [isCalculating, setIsCalculating] = useState(false)
  const [calculate, setCalculate] = useState({})

  return (
    <>
      <Header />
      <Greeting />
      <CardsRow />
    </>
  )
}
