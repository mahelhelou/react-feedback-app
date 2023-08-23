import { useState, useEffect, useContext } from 'react'

import Card from './Card'
import Button from './Button'
import Rating from './Rating'

import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
	const [rating, setRating] = useState(10)
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const { addFeedback, editFeedback, updateFeedback } = useContext(FeedbackContext)

	useEffect(() => {
		if (editFeedback.edit === true) {
			setBtnDisabled(false)
			setText(editFeedback.item.text)
			setRating(editFeedback.item.rating)
		}
	}, [editFeedback])

	const handleTextChange = e => {
		const value = e.target.value

		if (value === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (value.trim().length < 10) {
			setMessage('Text must be at least 10 characters')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}

		setText(value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (text.trim().length > 10) {
			const newFeedback = { text, rating }

			if (editFeedback.edit === true) {
				updateFeedback(editFeedback.item.id, newFeedback)
			} else {
				addFeedback(newFeedback)
			}

			// UX: Reset to default state after submission
			setBtnDisabled(true)
			setRating(10)
			setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<Rating select={setRating} selected={rating} />
				<div className='input-group'>
					<input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>

				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
