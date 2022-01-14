import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'
// Example of redirect (used to be Redirect, now is Navigate)

// Also Example of Nested Routes (example: post/show)

function Post() {
  const status = 200 // change to 404 to check behaviour
  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }

  if(status === 404) {
    return <Navigate to='/about' />
  }
  return (
    <div>
      Post
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello /show</h1>} />
      </Routes>
    </div>
  )
}

export default Post
