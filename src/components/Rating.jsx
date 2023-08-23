const Rating = props => {
	const handleChange = e => {
		props.select(parseInt(e.currentTarget.value)) // +e.currentTarget.value
	}

	return (
		<ul className='rating'>
			{[...Array(10)].map(($$_, i) => (
				<li key={`rating-${i + 1}`}>
					<input type='radio' id={`num${i + 1}`} name='rating' value={i + 1} onChange={handleChange} checked={props.selected === i + 1} />
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
			{/* {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))} */}
		</ul>
	)
}

export default Rating
