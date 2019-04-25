import { connect } from 'react-redux'

import MobileTable from '../../Components/MobileTable'

import { getRates } from '../../state/selectors'

const mapStateToProps = state => {
  return {
    rates: getRates(state)
  }
}

export default connect(mapStateToProps)(MobileTable)
