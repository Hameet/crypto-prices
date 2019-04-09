import React from 'react'
import { map, isNil, keys, values } from 'ramda'
import styled from 'styled-components'

const Table = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between
  border: 2px solid black;
`

const Li = styled.div`
  font-size: 2em;
  padding: 0 1em;
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
    <>
      {map(x => {
        return (
          <Table>
            <Li>{x.name}</Li>
            <Li>{x['24h_volume_usd']}</Li>
            <Li>
              <Price1h>{x.percent_change_1h}</Price1h>
            </Li>
          </Table>
        )
      }, rates)}
    </>
  )
}

export default Display
