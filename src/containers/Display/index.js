import { connect } from 'react-redux'

import Display from '../../Components/Display'

import { getPrices, getNames } from '../../state/selectors'
// import Restaurant from '../../components/Restaurant'

const mapStateToProps = state => {
  if (state == undefined) {
    return 'Nope'
  }
  const prices = getPrices(state.rates)
  const names = getNames(state.rates)
  console.log('names', state)
  return {
    prices,
    names
  }
}

export default connect(mapStateToProps)(Display)
