import PropTypes from 'prop-types'

import DisplayArcane from './DisplayArcane'

export default function ResultDisplay({ children }) {
  return (
    <div className='grid grid-cols-3 gap-4 px-10 py-4'>
      <div className='col-span-1'>
        <p className='text-2xl text-marian-blue-600 font-bold text-center'> {children} </p>
      </div>
      <div className='col-span-2'>
        <DisplayArcane number={children} />
      </div>
    </div>
  )
}

ResultDisplay.propTypes = {
  children: PropTypes.number
}

