import { useContext } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'

import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = props => {
	const { feedback, isLoading } = useContext(FeedbackContext)

	if (!isLoading && (!feedback || feedback.length === 0)) {
		return <p>No Feedback Yet! Be the first one to add a feedback.</p>
	}

	// Using a useState hook, props drilling of FeedbackData from app.js
	/* return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  ) */

	if (isLoading) return <Spinner />

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map(item => (
					<motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired
		})
	)
}

export default FeedbackList
