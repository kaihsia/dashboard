import React from 'react'

export const Incident = (props) => {
  if (! props.incident) {
    return <p>Loading...</p>
  }
  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Incident</h2>
      <p>{props.incident.description}</p>
    </div>
  )
}

Incident.propTypes = {
  isOpen     : React.PropTypes.bool.isRequired,
  toggleMenu : React.PropTypes.func.isRequired
}

export default Incident
