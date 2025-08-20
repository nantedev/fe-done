import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from './screens/LandingPage'
import Dons from './screens/Dons'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dons" element={<Dons />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
