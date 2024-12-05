import PropTypes from 'prop-types'
import Button from './Button'

import { NavLink } from 'react-router-dom'

export default function Card({ service }) {
  return (
    <div className='text-center px-2 mx-2'>
      <h2 className='text-2xl font-bold text-white text-center capitalize'>{service.service}</h2>
      <NavLink to={`/service/${service.id}`}>
        <Button bg='bg-powder-blue-500' content='calculate' />
      </NavLink>
    </div>
  )
}

Card.propTypes = {
  service: PropTypes.object
}
