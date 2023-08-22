import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Props can be destructured like { text, bgColor, textColor }
function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: '#ff6a95' }}>
          <h2>{props.text}</h2>
        </Link>
      </div>
    </header>
  )
}

// A backup values for the props
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
}

// A simple validation for the props types (Simpler than TypeScript)
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
