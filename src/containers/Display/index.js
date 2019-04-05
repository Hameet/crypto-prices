import { connect } from 'react-redux'

import Display from '../../Components/Display'

import {
  // FilteredKeys,
  FilteredValues,
  getNamesAndPrices
} from '../../state/selectors'

const mapStateToProps = state => {
  if (state === undefined) {
    return {}
  }
  const prices = FilteredValues(state.rates)
  const names = getNamesAndPrices(state.rates)
  // console.log('prices', )
  return {
    prices,
    names
  }
}

export default connect(mapStateToProps)(Display)
