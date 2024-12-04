import SignPage from '../components/SignPage'

import PropTypes from 'prop-types'


export default function Homepage() {


  return (
    <>
      <SignPage />
    </>
  )
}

Homepage.propTypes = {
  isLogged: PropTypes.bool
}
