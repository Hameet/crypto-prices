import React from 'react'

const Display = ({ prices, names }) => {
  console.log('inDisplaycontainer', prices)
  if (prices == undefined) {
    return 'Nothing'
  }
  const [Bitcoin, Ethereum, Ripple] = names
  return (
    <div>
      {
        <p>
          <span>{Bitcoin}</span>, {Ethereum},{Ripple}
        </p>
      }
    </div>
  )
}

export default Display
