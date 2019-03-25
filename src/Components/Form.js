import React from 'react'

const Form = props => (
  <form onSubmit={props.getCurrency}>
    <button>Get Prices</button>
  </form>
)

export default Form
