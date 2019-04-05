import React from 'react'
import { map, isNil, keys, values } from 'ramda'
import styled from 'styled-components'

const Li = styled.li`
  font-size: 2em;
  padding: 0 1em;
  align-content: center;
  list-style: none;
`

const Display = ({ names }) => {
  return isNil(names) ? (
    'Loading...............................'
  ) : (
    <ul>
      {map(x => {
        return <Li>{keys(x) + ' :' + values(x)}</Li>
      }, names)}
    </ul>
  )
}

export default Display
