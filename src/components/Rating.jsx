function Rating({ select, selected }) {
  /**
   * Converts the value of e.currentTarget.value into a number.
   * No need for global or local state, use regular (select) javascript prop
   */
  const handleChange = (e) => {
    // select(+e.currentTarget.value) // Shortcut
    select(Number(e.currentTarget.value))
  }

  return (
    <ul className='rating'>
      {[...Array(10)].map(($$_, i) => (
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
