import SignForm from '../components/SignForm'

import logo from '../assets/images/dark_logo.svg'

export default function SignPage() {
  return (
    <div className='mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8'>

      <img src={logo} className='h-28 place-self-center mb-10' />

      <SignForm />

    </div>
  )
}
