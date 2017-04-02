import { connect } from 'react-redux'
import { toggleMenu } from '../modules/incident'

import Incident from '../components/Incident'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  toggleMenu,
}

const mapStateToProps = (state, props) => {
  const id = parseInt(props.routeParams.id, 10)
  const incident = state.map.incidents.find(i => i.id === id)
  return ({
    incident,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Incident)
