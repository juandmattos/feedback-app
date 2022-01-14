// _rfce
// impt

// button:submit
// input:text
// .class-name
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Header = ({ text, bgColor, textColor }) => {
  return (
    <header style={{ backgroundColor: bgColor }}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: textColor }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string, // .isRequired
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header