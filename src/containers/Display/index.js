import { connect } from 'react-redux'

import Display from '../../Components/Display'

import { getRates } from '../../state/selectors'

const mapStateToProps = state => {
  return {
    rates: getRates(state)
  }
}

export default connect(mapStateToProps)(Display)
