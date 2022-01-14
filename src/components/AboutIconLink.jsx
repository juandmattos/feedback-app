import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to={{
        pathname: '/about',
        search: '?sort=name', // not necessary
        hash: '#hello' // not necessary
      }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink


// You can do only <Link to='/about'> above we shouw other options