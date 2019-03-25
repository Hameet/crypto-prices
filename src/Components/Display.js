import React from 'react'

const Display = props => {
  console.log(props, 'props')
  return (
    <div onLoad={props.getCurrency}>
      {
        <p>
          {' '}
          Bitcoin:
          <span> {props.currency}</span>
        </p>
      }
    </div>
  )
}

export default Display
