import arcanes from '../assets/data/arcanes.json'

import PropTypes from 'prop-types'

function DisplayArcane({ number }) {
  const card = arcanes.at(number)

  return (
    <>
      <img src={'/src/assets/images/arcanos/' + card.id + '.jpg'} />
      <p> {card.name} </p>
    </>
  )
}

DisplayArcane.propTypes = {
  number: PropTypes.number
}

export default DisplayArcane
