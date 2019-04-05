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
      {map(function (x) {
        return <Li>{keys(x) + ' :' + values(x)}</Li>
      }, names)}
    </ul>
  )
}

//  function Todolist ({ todos, handleOnDelete, index }) {
//   console.log('todos')
//   return isNilOrEmpty(todos) ? null : (
//     <ul>
//       {indexedMap(
//         (todo, idx) => (
//           <Li key={idx} data-index={idx}>
//             {todo}
//             <Button onClick={handleOnDelete.bind(index)}>&nbsp;Del</Button>
//           </Li>
//         ),
//         todos
//       )}
//     </ul>
//   )
// }

export default Display
