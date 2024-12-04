import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'


export default function UserButton() {
  return (
    <Link to='/settings' className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
      <button className='flex flex-shrink-0 items-center mr-4'>
        <FaUser className='text-6xl text-white py-1 px-1 rounded-full border-2 border-marian-blue border-solid bg-marian-blue' />
      </button>
    </Link>
  )
}


