import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { Flashcard } from './components/Flashcards'

import Home from './pages/Home'
import LoginRegister from './pages/LoginRegister'
// import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Learning from './pages/Learning'
import Error from './components/Error'
import LeitnerNavbar from './components/LeitnerNavbar'
import ProtectedRoute from './components/ProtectedRoute'

function App () {
  // const [cards, setCards] = useState([])

  // useEffect(() => {
  //   guessService.oneCard().then(cards => {
  //     setCards(cards)
  //   })
  // }, [])

  return (
    // <div className="App">
    //   <Flashcard data={ cards[0] } />
    // </div>
    <BrowserRouter>
      <LeitnerNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/learning" element={<Learning />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
