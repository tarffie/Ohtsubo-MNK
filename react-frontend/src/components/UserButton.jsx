import { FaUser } from "react-icons/fa";


export default function UserButton() {
  return (
    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
      <button className='flex flex-shrink-0 items-center mr-4' onClick={() => undefined}>
        <FaUser className='text-6xl text-white py-1 px-1 rounded-full border-2 border-marian-blue border-solid bg-marian-blue' />
      </button>
    </div>
  )
}


