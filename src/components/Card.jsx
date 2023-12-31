import PropTypes from 'prop-types'

const Card = props => {
	return (
		<div
			className='card'
			style={{
				backgroundColor: props.reverse ? 'rgba(0,0,0,0.4)' : '#fff',
				color: props.reverse ? '#fff' : '#000'
			}}
		>
			{props.children}
		</div>
	)
}

Card.defaultProps = {
	reverse: false
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool
}

export default Card
