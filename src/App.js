// Packages
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

// Pages
import About from './pages/About'

// States
import FeedbackData from './data/FeedbackData'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  {/* <FeedbackList feedback={feedback} /> */}
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<About />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
