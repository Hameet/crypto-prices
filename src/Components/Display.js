import React from 'react'
import { map, isNil, keys, values } from 'ramda'
import styled from 'styled-components'

const Li = styled.li`
  font-size: 2em;
  padding: 0 1em;
  align-content: center;
  list-style: none;
`
const Price1h = styled.div`
  border-radius: 15px;

  color: white;
  width: 30px;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-size: 15px;
  background-color: ${function (reactive) {
    console.log('reactive', reactive)
    return reactive.children < 0 ? 'red' : 'green'
  }};
`

const Display = ({ rates }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  console.log('reactive')
  return (
    <ul>
      {map(x => {
        return (
          <div>
            <Li>
              <Price1h>{x.percent_change_1h}</Price1h>
            </Li>
            {/* <Li>{x.name}</Li> */}
            {/* <Li>{x['24h_volume_usd']}</Li> */}
          </div>
        )
      }, rates)}
    </ul>
  )
}

export default Display
