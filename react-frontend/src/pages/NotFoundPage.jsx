import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='text-yellow-600 text-4xl mb-4' />
      <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist</p>
      <Link to='/' className='text-white rounded px-3 py-2 mt-4 bg-marian-blue-700 hover:bg-marian-blue-900'>
        Go back..
      </Link>
    </section>
  )
}

export default NotFoundPage
