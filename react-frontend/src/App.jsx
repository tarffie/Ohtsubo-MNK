import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Main website components
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import SettingsPage from './pages/SettingsPage'

// main service-related and calculator components
import CalculatorLayout from './layouts/CalculatorLayout'
import ServicesPage from './pages/ServicesPage'
import MissaoDeVida from './pages/MissaoDeVida'

import Results from './pages/Results'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/sandbox' element={<Results />} />
        </Route>
        <Route path='/service' element={<CalculatorLayout />}>
          <Route index element={<ServicesPage />} />
          <Route path='/service/1' element={<MissaoDeVida />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

