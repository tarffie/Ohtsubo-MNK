import PropTypes from 'prop-types'
import Button from './Button'

export default function Card({ service }) {
  return (
    <div className='text-center px-2 mx-2'>
      <h2 className='text-2xl font-bold text-white text-center capitalize'>{service.service}</h2>
      <Button bg='bg-powder-blue-500' content='calculate' target={service.service} />
    </div>
  )
}

Card.propTypes = {
  service: PropTypes.object
}
