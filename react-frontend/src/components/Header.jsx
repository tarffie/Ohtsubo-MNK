import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo_dark.png'


import UserButton from '../components/UserButton'

export default function Header() {
  return (
    <nav className='bg-powder-blue-600 border-b border-powder-blue-400 mb-4'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 justify-between'>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Projeto MNK 🪬
              </span>
              <img className='h-20 w-auto' src={logo} alt='Projeto MNK' />
            </NavLink>
          </div>

          <UserButton />

        </div>
      </div>
    </nav>
  )
}
