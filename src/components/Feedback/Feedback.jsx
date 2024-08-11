const Feedback = ({feedback}) => {
  return (
    <ul>
    {Object.entries(feedback).map(([key, value]) => (
      <li key={key}>
          {key}: {value}
      </li>
    ))}
  </ul>
  )
}

export default Feedback