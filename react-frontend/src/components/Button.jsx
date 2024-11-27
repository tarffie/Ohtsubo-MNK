import PropTypes from 'prop-types'

export default function Button({ target, type }) {
  return <button type={type} className='bg-marian-blue-500 text-white hover:bg-marian-blue-700 
      font-bold py-2 rounded w-40'> {target}</button>
}

Button.propTypes = {
  target: PropTypes.string,
  type: PropTypes.string,
}
