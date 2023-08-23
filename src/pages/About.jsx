import { Link } from 'react-router-dom'
import Card from '../components/Card'

const About = props => {
	return (
		<Card>
			<div className='about'>
				<h1>About Feedback App</h1>
				<p>A React app to leave feedback and ratings from the clients. It uses a fake backend api with `json-server` npm package.</p>
				<h3>Project Features</h3>
				<ul>
					<li>
						<strong>C ~ </strong>Create a new feedback
					</li>
					<li>
						<strong>R ~ </strong>Read all feedbacks
					</li>
					<li>
						<strong>U ~ </strong>Update an existing feedback
					</li>
					<li>
						<strong>D ~ </strong>Delete unwanted feedback
					</li>
				</ul>

				<Link to='/' className='back-to-home'>
					Back To Home
				</Link>
			</div>
		</Card>
	)
}

export default About
