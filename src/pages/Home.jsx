// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

// import FeedbackData from './data/FeedbackData'

const Home = () => {
  // const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />

      <div className='about-link'>
        <Link to='/about'>
          <FaQuestion size={30} />
        </Link>
      </div>
    </>
  )
}

export default Home
