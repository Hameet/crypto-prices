import { connect } from 'react-redux'

import DesktopTable from '../../Components/DesktopTable'

import { getRates } from '../../state/selectors'

const mapStateToProps = state => {
  return {
    rates: getRates(state)
  }
}

export default connect(mapStateToProps)(DesktopTable)
