import PropTypes from 'prop-types'

export default function ResultDisplay({ children }) {
  return (
    <div>
      <p> {children} </p>
    </div>
  )
}

ResultDisplay.propTypes = {
  children: PropTypes.array
}

