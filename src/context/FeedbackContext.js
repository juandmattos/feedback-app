import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import feedbackInitialState from '../data/FeedbackData'

const FeedbackContext = createContext()

// Provider ---> Make sure components can access the context 
// get global state ---> useContext

// Provider in app js to englobe the APP
// Context --> to get the state in individual components ==> useContext(SpecificContext)
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState(feedbackInitialState)

  // item to be edited and flag edit/no edit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const updateFeedback = (id, updItem) => {
    setFeedback((feedback.map((item) => item.id === id ? {
      ...item,
      ...updItem
    } : item)))
  }

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const deleteFeedback = id => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(prev => prev.filter(item => item.id !== id))
    }
  }

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      updateFeedback,
      editFeedback,
      feedbackEdit
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
