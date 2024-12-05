import PropTypes from 'prop-types'

import createArray from './createArray'

export default function missaoDeVida(date) {
  const arr = createArray(date)
}

missaoDeVida.propTypes = {
  date: PropTypes.string
}


