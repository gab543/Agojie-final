import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Expertises from './pages/Expertises'
import Reserver from './pages/Reserver'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/expertises" element={<Expertises />} />
        <Route path="/reserver" element={<Reserver />} />
      </Routes>
    </BrowserRouter>
  )
}
