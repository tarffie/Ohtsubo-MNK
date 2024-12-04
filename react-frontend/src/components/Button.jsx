import PropTypes from 'prop-types'

export default function Button({ content, target, type, bg = 'bg-marian-blue-500' }) {

  const hoverBg = bg.replace('-500', '-700')

  return <button type={type} className={`${bg} text-white hover:${hoverBg} 
      font-bold py-2 rounded w-40`}> {content === undefined ? target : content}</button>
}

Button.propTypes = {
  content: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  bg: PropTypes.string,
}
