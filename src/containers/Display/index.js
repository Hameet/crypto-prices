import { connect } from 'react-redux'

import Display from '../../Components/Display'

import { getPrices } from '../../state/selectors'
// import Restaurant from '../../components/Restaurant'

const mapStateToProps = state => {
  console.log('state', state)
  const prices = getPrices(state.items)
  const { ABC, BTC } = { prices }
  console.log('prices', prices)
  return {
    prices
  }
}

export default connect(mapStateToProps)(Display)
