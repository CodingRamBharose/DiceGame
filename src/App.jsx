import React from 'react'
import { BrowserRouter as Router , Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Game from './components/Game'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/landingpage"/>}/>
          <Route path='/landingpage' element={<LandingPage/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
