import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from './screens/LandingPage'
import Dons from './screens/Dons'
import Show from './screens/Show'
import New from './screens/New'
import Edit from './screens/Edit'
import axios from 'axios'
import Boilerplate from './partials/Boilerplate'
import ErrorScreen from './screens/ErrorScreen'



axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Boilerplate />}>
          <Route path="/dons" element={<Dons />} />
          <Route path="/dons/:id" element={<Show  />} />
          <Route path="/dons/:id/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
          <Route path="/error" element={<ErrorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
