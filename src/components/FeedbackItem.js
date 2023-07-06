import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'

import Card from '../shared/Card'

import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem(props) {
  /* const handleClick = (id) => {
    console.log(id)
  } */

  const { deleteFeedback, feedbackEdit } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{props.item.rating}</div>
      <button onClick={() => deleteFeedback(props.item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => feedbackEdit(props.item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{props.item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
