import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from './screens/LandingPage'
import Dons from './screens/Dons'
import Show from './screens/Show'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dons" element={<Dons />} />
        <Route path="/don/:id" element={<Show  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
