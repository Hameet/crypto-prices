import React from 'react'

const Display = ({ prices }) => {
  const { ABC, BTC, AION } = prices
  if (prices == undefined) {
    return 'Nothing'
  }
  
  return (
    <div>
      {
        <p>
          {' '}
          Bitcoin:
          <span> {BTC}</span>
          <span> AION: {AION}</span>
          <span>
            {' '}
            ABC:
            {ABC}
          </span>
        </p>
      }
    </div>
  )
}

export default Display
