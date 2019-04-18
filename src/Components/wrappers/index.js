import { connect } from 'react-redux'
import { map, pipe } from 'ramda'

import { getPriceChange1h } from '../../state/selectors'

function mapStateToProps (state) {
  const isPositive = factor => factor < 0

  const Prices_1h = getPriceChange1h(state)
  console.log('inwrapper', isPositive(Prices_1h))
  return {
    reactive: isPositive(Prices_1h)
  }
}

export default connect(mapStateToProps)
