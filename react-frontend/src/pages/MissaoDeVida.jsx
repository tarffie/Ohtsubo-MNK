import missaoDeVida from '../utils/functions/missaoDeVida'

import { useState } from 'react'

const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/

export default function MissaoDeVida() {
  const [formData, setFormData] = useState({
    birthDate: '',
  })

  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const errors = {
    birthDate: "insert a valid birthdate",
    invalidFormat: "make sure your input is existent."
  }

  const handleSubmit = (event) => {

    // to prevent page reload at submit
    event.preventDefault()

    let { birthDate } = formData

    if (birthDate) {

      if (!birthDate.match(regex)) {

        setErrorMessages({ name: "birthDate", message: errors.birthDate })

      } else {

        setIsSubmitted(true)

      }

    } else {

      setErrorMessages({ name: "invalidField", message: errors.invalidFormat })

    }

    missaoDeVida(birthDate)
  }

  return (
    <>
      {errorMessages.name && <p className='text-red-600 font-bold py-4 text-center'>{errorMessages.message}</p>}
      <form className='flex' onSubmit={handleSubmit}>
        <input type='text' id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} className='flex flex-1 mr-2' placeholder='dd/MM/YYYY' />
        <button type='submit' className='border-2 border-solid border-black-300'> Calculate! </button>
      </form>
      {isSubmitted && <p>calculation done!</p>}
    </>
  )
}
