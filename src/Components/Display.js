import React from 'react'
import { map, isNil, keys, values } from 'ramda'
import styled from 'styled-components'

const Li = styled.li`
  font-size: 2em;
  padding: 0 1em;
  align-content: center;
  list-style: none;
  color: ${function (reactive) {
    console.log('reactive', reactive)
    const lul = reactive.children < 0
    return lul ? 'palevioletred' : 'green'
  }};
  //color: red;
`

const Display = ({ Prices_1h }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  console.log('reactive')
  return (
    <ul>
      {map(x => {
        return <Li>{x}</Li>
      }, Prices_1h)}
    </ul>
  )
}

export default Display
