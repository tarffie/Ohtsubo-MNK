import { Link } from 'react-router-dom'

const menuOptions = [
  'plans',
  'about',
  'contact',
]

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function SettingsMenu() {
  return (
    <div className='flex vh-100 vw-100'>
      <ul>
        {menuOptions.map((item, index) => (
          <Link key={index} to={`/${item}`} >
            <li className='text-bold' key={index}> {capitalize(item)} </li>
          </Link >
        ))}
      </ul>
    </div>
  )
}
