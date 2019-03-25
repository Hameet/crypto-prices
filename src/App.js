import React, { Component } from 'react'
import Display from './Components/Display'
import Form from './Components/Form'

const API_KEY = `89bcb9d40a3fd6b18613ef79499b757e`

class App extends Component {
  state = {
    currency: undefined,
    error: undefined
  }
  getCurrency = async e => {
    e.preventDefault()
    const api_call = await fetch(
      `http://api.coinlayer.com/api/live?access_key=89bcb9d40a3fd6b18613ef79499b757e`
    )
    const data = await api_call.json()
    const currency = data.rates
    console.log('data', data)

    if (data.cod == 404) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please make sure your inputs are valid.',
        min_temperature: undefined,
        max_temperature: undefined,
        icon: null,
        wind: undefined
      })
    } else {
      this.setState({
        currency: data.rates.BTC,
        error: ''
      })
    }
  }
  render () {
    console.log(this.state.currency, 'this')
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-7 form-container'>
                  <Form getCurrency={this.getCurrency} />
                  <Display
                    currency={this.state.currency}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
