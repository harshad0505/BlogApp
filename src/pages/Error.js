import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className="error-page">
      <h1>404 page not found !</h1> <br />
      <Link to="/" className='error-link' > Back to home </Link>
    </div>
  )
}

export default Error