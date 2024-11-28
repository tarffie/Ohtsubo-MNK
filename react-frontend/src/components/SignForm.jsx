import { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

import Button from './Button'

// User Login info
const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];


export default function SignForm() {
  const navigate = useNavigate()

  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const errors = {
    username: "invalid username",
    password: "invalid password"
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault()

    let { username, password } = formData

    // Find User login info 
    const userData = database.find((user) => user.username === username)

    if (userData) {

      if (userData.password !== password) {
        setErrorMessages({ name: "password", message: errors.password })
      } else {
        setIsSubmitted((prevState) => setIsSubmitted(!prevState))
      }

    } else {
      setErrorMessages({ name: "username", message: errors.username })
    }

    navigate('/dashboard')
  }

  return (
    <div className='flex inline items-center justify-center md:items-stretch md:justify-start'>
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
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start mb-3">
            <Button type={"submit"} target="login" />
          </div>
          {errorMessages.name && <p className='text-red-600 font-bold py-4 text-center'>{errorMessages.message}</p>}
          {isSubmitted && <p>Login successful!</p>}
        </form>
        <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start mb-3'>
          <NavLink to={'/register'}>
            <Button type={"button"} target="register" />
          </NavLink>
        </div>
      </div>
    </div >
  );
}
