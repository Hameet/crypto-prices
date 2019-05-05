import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { defaultState } from '../../state/defaultState'

import DesktopTable from './'

const mockStore = configureStore()

describe('containers:DesktopTable', () => {
  it('should map API data to props', () => {
    const data = defaultState
    const store = mockStore({ data })
    const wrapper = shallow(<DesktopTable store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        data
      })
    )
  })
})
