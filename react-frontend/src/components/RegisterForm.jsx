import { useState } from 'react'

import { formErrors } from '../utils/errors/formErrors'
import fetchUser from '../utils/functions/fetchUser'

import Button from '../components/Button'

function RegisterForm() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(undefined)

  const STANDARD = 1
  const PREMIUM = 2

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    plan: 0,
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault()

    let { username, password, email, plan } = formData

    // Find user if exists, will create if not
    const userData = fetchUser(formData.username)
  }

  const handleRadioChange = (plan) => {
    setSelectedPlan(plan)
  }

  return (
    <div className='flex inline items-center justify-center md:items-stretch md:justify-start mt-20'>
      <div className='flex-col items-center'>
        <form onSubmit={handleSubmit} className='flex-col gap-4 w-full max-w-xs'>
          <div className='mb-5'>
            <input
              className='rounded-lg px-2 border-solid border-2 placeholder-marian-blue-500  border-marian-blue-500'
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <input
              className='rounded-lg px-2 border-solid border-2 placeholder-marian-blue-500  border-marian-blue-500 '
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5 mr-10 gap-4'>
            <input name='plan-1' type='radio' id='plan-1' value={STANDARD} onChange={() => handleRadioChange(STANDARD)} />
            <input name='plan-2' type='radio' id='plan-2' value={PREMIUM} onChange={() => handleRadioChange(PREMIUM)} />
          </div>
        </form>
      </div>
      <div>
        <Button content={'send stuff'} type={'submit'} />
      </div>
      {isSubmitted && <p> {formData.username} </p>}
    </div>
  )
}

export default RegisterForm
