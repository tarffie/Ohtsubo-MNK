import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CalculatorLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
