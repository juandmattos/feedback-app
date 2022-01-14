import {useParams} from 'react-router-dom'

function PostExample() {
  const params = useParams()

  return (
    <div>
      <h1>Post {params.id}</h1>
      <h3>Name {params.name}</h3>
    </div>
  )
}

export default PostExample
