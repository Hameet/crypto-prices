import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { defaultState } from '../../state/defaultState'
import { getRates } from '../../state/selectors'

import DesktopTable from './'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

global.toJson = toJson

const mockStore = configureStore()

describe('containers:DesktopTable', () => {
  it('should map API data to props', () => {
    const data = defaultState
    const store = mockStore({ defaultState })
    const wrapper = shallow(<DesktopTable store={store} />)
    console.log('log', wrapper.props())
    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        rates: getRates(defaultState)
      })
    )
  })
})
