import { Link } from 'react-router-dom'
import Card from '../shared/Card'

function About(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>A React app to leave feedback and ratings from the clients.</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default About
