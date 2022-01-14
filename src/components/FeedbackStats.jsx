import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

  let average = feedback.reduce((acc, cur) => { // accumulator and current value
    return acc + cur.rating
  // 0 is the default accumulator (can be a number, an empty array, etc)
  }, 0) / feedback.length // The reducer is the sum of all ratings, so we divide

  average = average.toFixed(1).replace(/[.,]0$/, '') // One decimal, if its 0, replace it with ''

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
