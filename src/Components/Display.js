import React from 'react'

const Display = ({ prices, names }) => {
  console.log('inDisplaycontainer', names)
  if (prices == undefined) {
    return 'Loading...............................'
  }
  const [{ Bitcoin }, { Ethereum }, { Ripple }] = names
  console.log('ripple', Bitcoin)
  return (
    <div>
      {
        <p>
          <span>Bitcoin:{Bitcoin}</span>

          <span>Ripple:{Ripple}</span>

          <span>Ethereum:{Ethereum}</span>
        </p>
      }
    </div>
  )
}

export default Display
