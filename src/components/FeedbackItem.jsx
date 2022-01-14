// import { useState } from 'react'
import {useContext} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('Example Text')

  // const handleClick = () => {
  //   setRating(prev => prev + 1)
  // }

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple'/>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}> Click </button> */}
    </Card>
  )
}

export default FeedbackItem
