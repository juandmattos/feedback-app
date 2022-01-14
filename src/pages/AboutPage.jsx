import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>React app Feedback Project</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage
