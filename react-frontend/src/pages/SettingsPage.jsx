import SettingsMenu from '../components/SettingsMenu'

import { Link } from 'react-router-dom'

export default function SettingsPage() {
  return (
    <>
      <SettingsMenu />
      <Link to='/dashboard' >
        <p> go back </p>
      </Link>
    </>
  )
}
