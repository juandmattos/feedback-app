import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import Card from './components/shared/Card'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import PostExample from './components/PostExample'

import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }/>
            <Route path='/about' element={<AboutPage />} />
            {/* Need to add * to handle nested routes in Post */}
            <Route path='/post/*' element={<Post />} /> 
            <Route path='/postexample/:id/:name' element={<PostExample />} />
          </Routes>
          {/* NavLink is like link but you can customize it, here an example: */}
          <Card>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeclassname='active'>
              About
            </NavLink>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
