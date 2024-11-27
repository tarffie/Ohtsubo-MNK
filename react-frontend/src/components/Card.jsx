import PropTypes from 'prop-types'

export default function Card({ service }) {
  return (
    <div>
      <p> {service.service} </p>
      <p> {service.permissions} </p>
      <p> {service.category} </p>
      <br />
    </div>
  )
}

Card.propTypes = {
  service: PropTypes.object
}
